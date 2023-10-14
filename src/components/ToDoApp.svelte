<script lang="ts">
	import Controls from '../components/Controls.svelte';
	import ToDoList from '../components/ToDoList.svelte';
	import type { Item } from '$lib/types';
	import { onMount } from 'svelte';
	import { v4 as uuidv4 } from 'uuid';
	import { items } from '$lib/store';

	let todoKey = 'todoList';

	function addTodoItem(event: CustomEvent<string>) {
		const item: Item = {
			id: uuidv4(),
			text: event.detail,
			isDone: false
		};
		$items = [...$items, item];
		updateLocalStorage();
	}

	function removeTodoItem(event: CustomEvent<string>) {
		$items = $items.filter(
			(item) => item.id !== event.detail
		);
		updateLocalStorage();
	}

	function updateTodoItem(
		event: CustomEvent<{ isDone: boolean; id: string }>
	) {
		const item = $items.find(
			(item) => item.id === event.detail.id
		);
		if (item) item.isDone = event.detail.isDone;
		$items = [...$items];
		updateLocalStorage();
	}

	function updateLocalStorage() {
		localStorage.setItem(todoKey, JSON.stringify($items));
	}

	onMount(init);
	function init() {
		if (localStorage.length != 0) {
			clear();
			const tmp = localStorage.getItem(todoKey);
			$items = tmp != null ? JSON.parse(tmp) : [];
		}
	}

	function clear() {
		$items = $items.splice(0, $items.length);
	}
</script>

<div class="container">
	<Controls on:add={addTodoItem} />
	<ToDoList
		bind:items={$items}
		on:remove={removeTodoItem}
		on:update={updateTodoItem}
	/>
</div>

<style>
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
		.container {
			padding: 20px;
		}
	}
</style>
