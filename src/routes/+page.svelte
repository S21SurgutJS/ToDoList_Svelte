<script lang="ts">
	import ToDoApp from '../components/ToDoApp.svelte';
</script>

<div class="page-wrapper">
	<ToDoApp />
</div>

<style>
	.page-wrapper {
		display: flex;
		padding: 15px;
		height: 100vh;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 480px) {
		.page-wrapper {
			padding: 0;
		}
	}
</style>
