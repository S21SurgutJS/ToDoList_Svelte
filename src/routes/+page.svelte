<script lang="ts">
	import ToDoApp from '../components/ToDoApp.svelte';
</script>

<div class="page-wrapper">
	<ToDoApp />
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}
	
	:global(html, body) {
		margin: 0;
		padding: 0;
	}

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
