<script>
	import ToDoItem from './ToDoItem.svelte';
</script>

<ul class="todo-list">
	<ToDoItem />
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
