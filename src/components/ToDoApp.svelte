<script lang="ts">
	import Controls from '../components/Controls.svelte';
	import ToDoList from '../components/ToDoList.svelte';
  import type {Item} from '$lib/types';

	let items: Item[] = [
		{
			id: 1,
			text: 'Todo',
			isDone: true
		},
		{
			id: 2,
			text: 'Todo',
			isDone: false
		},
		{
			id: 3,
			text: 'Todo',
			isDone: false
		}
	];
	let id = 4;

	function addTodoItem(event: CustomEvent<{inputValue:string}>) {
		const item: Item = {
			id: id++,
			text: event.detail.inputValue,
			isDone: false,
		}
		items = [...items, item];
	}

	function removeTodoItem(event: CustomEvent<number>) {
		items = items.filter((item) => item.id !== event.detail);
	}

	function updateTodoItem(event: CustomEvent<{isDone: boolean, id: number}>) {
		const item = items.find(item => item.id === event.detail.id);
		if (item) item.isDone = event.detail.isDone;
		items = [...items];
	}
</script>

<div class="page-wrapper">
	<div class="container">
		<Controls
			on:add={addTodoItem}
		/>
		<ToDoList
			{items}
			on:remove={removeTodoItem}
			on:update={updateTodoItem}
		/>
	</div>
</div>

<style>
	.page-wrapper {
		display: flex;
		padding: 15px;
		height: 100vh;
		align-items: center;
		justify-content: center;
	}

	.container {
		display: grid;
		grid-template-rows: auto 1fr;
		gap: 20px;
		width: 635px;
		height: 797px;
		padding: 40px;
		border-radius: 15px;
		background-color: #e6e6e6;
		overflow: hidden;
	}

	@media (max-width: 480px) {
		.page-wrapper {
			padding: 0;
		}

		.container {
			padding: 20px;
		}
	}
</style>
