<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let inputValue: string;

	const dispatch = createEventDispatcher();

	function addTodo() {
		if(inputValue.trim()){
			dispatch('add', inputValue);
		}
		else alert('field id empty');
		inputValue = '';
	}
</script>

<form class="controls" on:submit|preventDefault={addTodo} >
	<input type="text" class="controls__input" name="todo name" bind:value={inputValue} />
	<button class="controls__btn" >Добавить</button>
</form>

<style>
	.controls {
		display: grid;
		grid-template-columns: 5fr 2fr;
	}

	.controls__input {
		min-height: 65px;
		padding: 0 20px;
		font-family: inherit;
		font-size: 18px;
		border: none;
		border-radius: 10px 0 0 10px;
	}

	.controls__btn {
		padding: 0 10px;
		border: none;
		border-radius: 0 10px 10px 0;
		font-size: 18px;
		background-color: #fbcc28;
		opacity: 0.6;
		transition-property: border-radius, opacity;
		transition-duration: 0.5s, 0.5s;
		transition-timing-function: ease-in-out, ease-in-out;
		cursor: pointer;
	}

	.controls__btn:hover {
		opacity: 1;
		border-radius: 0 30px 30px 0;
	}

	@media (max-width: 480px) {
		.controls {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}

		.controls__input {
			min-height: 50px;
			border-radius: 10px 10px 0 0;
			text-align: center;
		}

		.controls__btn {
			border-radius: 0 0 10px 10px;
		}
	}
</style>
