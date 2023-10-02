<script lang="ts">
	import ToDoItem from './ToDoItem.svelte';
  type Item = {
		id: number
		name: string
		isDone: boolean
	}
  export let items: Item[];
</script>

<ul class="todo-list">
	{#each items as item (item.id)}
		<ToDoItem {...item} />
	{/each}
</ul>

<style>
	.todo-list {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin: 0;
		padding: 20px;
		border-radius: 15px;
		background-color: #ffffff;
		overflow: auto;
	}
</style>
