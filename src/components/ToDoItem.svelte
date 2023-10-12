<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	export let id: string;
	export let text: string;
	export let isDone: boolean;

	const dispatch = createEventDispatcher();
	function removeItem() {
		dispatch('remove', id);
	}

	function updateItem() {
		dispatch('update', { isDone: !isDone, id });
	}
</script>

<li class="todo-list__item" transition:fly|global={{ x: 200, duration: 400 }}>
	<label class="todo-list__label">
		<input
			name="isDone"
			type="checkbox"
			class="todo-list__checkbox"
			checked={isDone}
			on:change={updateItem}
		/>
		<p class="todo-list__text">{text}</p>
	</label>
	<button class="todo-list__btn" on:click={removeItem} />
</li>

<style>
	.todo-list__item {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		margin: 0;
		padding: 0;
		background-color: #ffebeb;
		list-style: none;
	}

	.todo-list__label {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 17px;
		align-items: center;
		padding: 0 20px;
		min-height: 85px;
		border-radius: 10px;
		cursor: pointer;
	}

	.todo-list__checkbox {
		width: 25px;
		height: 25px;
	}

	.todo-list__text {
		font-size: 18px;
	}

	.todo-list__btn {
		position: relative;
		margin: 0;
		padding: 0;
		width: 76px;
		height: 100%;
		border: none;
		background-color: transparent;
		background-image: url('./basket.svg');
		background-repeat: no-repeat;
		background-position: center center;
		opacity: 0.5;
		background-size: 30px;
		cursor: pointer;
		transition: opacity ease-in-out 0.3s;
	}

	.todo-list__btn:hover {
		opacity: 1;
	}

	.todo-list__checkbox:checked + .todo-list__text {
		text-decoration: line-through;
	}

	.todo-list__item:has(.todo-list__checkbox:checked) {
		background-color: #ebffed;
	}

	@media (max-width: 480px) {
		.todo-list__label {
			gap: 15px;
			padding: 0 15px;
			min-height: 70px;
		}

		.todo-list__checkbox {
			width: 20px;
			height: 20px;
		}

		.todo-list__text {
			font-size: 16px;
		}

		.todo-list__btn {
			width: 50px;
			background-size: 20px;
		}
	}
</style>
