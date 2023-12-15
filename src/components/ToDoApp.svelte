<script lang="ts">
	import Controls from '../components/Controls.svelte';
	import ToDoList from '../components/ToDoList.svelte';
	import type { ITodoItem } from '$lib/types';
	import { onMount } from 'svelte';
	import { todoApiModule } from '$lib/api';

	let items: ITodoItem[] = [];

	async function updateTodoList() {
		items = await todoApiModule.getTodos();
	}

	async function addTodoItem(event: CustomEvent<string>) {
		await todoApiModule.addTodo({
			text: event.detail,
			is_done: false
		});
		updateTodoList();
	}

	async function removeTodoItem(
		event: CustomEvent<number>
	) {
		await todoApiModule.removeTodo(event.detail);
		updateTodoList();
	}

	async function updateTodoItem(
		event: CustomEvent<ITodoItem>
	) {
		await todoApiModule.updateTodo({
			id: event.detail.id,
			text: event.detail.text,
			is_done: event.detail.is_done
		});
	}

	onMount(updateTodoList);

	function clear() {
		items = items.splice(0, items.length);
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
