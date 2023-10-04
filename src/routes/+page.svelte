<script lang="ts">
	import Controls from '../components/Controls.svelte';
	import ToDoList from '../components/ToDoList.svelte';
	import type { Item } from '$lib/types';

	let items: Item[] = [
		{
			id: 1,
			name: 'Todo',
			isDone: true
		},
		{
			id: 2,
			name: 'Todo',
			isDone: false
		},
		{
			id: 3,
			name: 'Todo',
			isDone: false
		}
	];

	function addTodoItem(event: any) {
		console.log('func start');
		const toDoText = event.detail;
	}
</script>

<div class="page-wrapper">
	<div class="container">
		<Controls />
		<ToDoList {items} on:add={addTodoItem} />
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
