<script lang="ts">
	import Led from './led.svelte';
	import type { NumberGrid } from './utils';

	export let digit: NumberGrid;
	export let size = 6;
</script>

<div class="flex flex-col gap-1">
	{#each digit as row}
		<div class="flex gap-1">
			{#each row as cell}
				<Led {size} on={cell} />
			{/each}
		</div>
	{/each}
</div>
