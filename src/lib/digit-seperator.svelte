<script>
	import Led from './led.svelte';
	export let size = 6;
</script>

<div class="flex flex-col gap-1">
	{#each Array(5) as _}
		<Led {size} />
	{/each}
</div>
