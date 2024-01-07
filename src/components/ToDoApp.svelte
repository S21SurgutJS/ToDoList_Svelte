<script lang="ts">
	import Controls from '../components/Controls.svelte';
	import ToDoList from '../components/ToDoList.svelte';
	import type { ITodoItem } from '$lib/types';
	import { todoApiModule } from '$lib/api';

	let items: ITodoItem[] = [];

	updateTodoList();

	async function updateTodoList() {
		items = await todoApiModule.getTodos();
		console.log('update');
	}

	async function addTodoItem(event: CustomEvent<string>) {
		await todoApiModule.addTodo({
			text: event.detail,
			is_done: false
		});
		await updateTodoList();
	}

	async function removeTodoItem(
		event: CustomEvent<number>
	) {
		await todoApiModule.removeTodo(event.detail);
		updateTodoList();
	}

	function updateTodoItem(event: CustomEvent<ITodoItem>) {
		todoApiModule.updateTodo({
			id: event.detail.id,
			text: event.detail.text,
			is_done: event.detail.is_done
		});
	}
</script>

<div class="container">
	<Controls on:add={addTodoItem} />

	<ToDoList
		{items}
		on:remove={removeTodoItem}
		on:update={updateTodoItem}
	/>
</div>

<style>
	.container {
		display: grid;
		grid-template-rows: auto 1fr;
		gap: 25px;
		width: 635px;
		height: 797px;
		padding: 40px;
		border-radius: 15px;
		background-color: #e6e6e6;
		overflow: hidden;
	}

	@media (max-width: 480px) {
		.container {
			padding: 20px;
		}
	}
</style>
