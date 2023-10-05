<script lang="ts">
	import Controls from '../components/Controls.svelte';
	import ToDoList from '../components/ToDoList.svelte';
  import type {Item} from '$lib/types';
	import { onMount } from 'svelte';

	let items: Item[] = [];
	let id = 1;
	let todoKey = 'todoList';

	function addTodoItem(event: CustomEvent<string>) {
		const item: Item = {
			id: id++,
			text: event.detail,
			isDone: false,
		}
		items = [...items, item];
		updateLocalStorage();
	}

	function removeTodoItem(event: CustomEvent<number>) {
		items = items.filter((item) => item.id !== event.detail);
		updateLocalStorage();
	}

	function updateTodoItem(event: CustomEvent<{isDone: boolean, id: number}>) {
		const item = items.find(item => item.id === event.detail.id);
		if (item) item.isDone = event.detail.isDone;
		items = [...items];
		updateLocalStorage();
	}

	function updateLocalStorage() {
  	localStorage.setItem(todoKey, JSON.stringify(items));
	}

	onMount(init);
	function init() {
  if (localStorage.length != 0) {
    clear();
		const tmp = localStorage.getItem(todoKey);
    items = tmp != null ? JSON.parse(tmp) : [];
  }
  if (items.length) {
    id = Math.max(...items.map(item => item.id)) + 1;
  }
}

function clear() {
  items.splice(0, items.length)
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
