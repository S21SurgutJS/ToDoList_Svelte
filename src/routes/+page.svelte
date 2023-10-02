<script lang="ts">
	import Controls from '../components/Controls.svelte';
	import ToDoList from '../components/ToDoList.svelte';
  type Item = {
		id: number
		name: string
		isDone: boolean
	}

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
</script>

<div class="page-wrapper">
	<div class="container">
		<Controls />
    <ToDoList bind:items />
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
