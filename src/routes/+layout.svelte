<script>
	import Header from '../lib/header.svelte';
	import '@fontsource/inter-tight';
	import '../app.css';
	import SideDecoration from '$lib/side-decoration.svelte';
</script>

<div class="grid layout-grid min-h-screen">
	<Header />
	<main
		class="flex flex-col justify-center items-center relative max-w-5xl mx-auto w-full overflow-hidden"
	>
		<slot />
		<div class="absolute right-0 top-0">
			<SideDecoration />
		</div>
		<div class="absolute left-0 rotate-180 top-0">
			<SideDecoration />
		</div>
	</main>
</div>

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}
	.layout-grid {
		grid-template-rows: auto 1fr;
	}
</style>
