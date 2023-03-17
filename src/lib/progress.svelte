<script lang="ts">
	import { goalStore, stopWatchStore } from '../Store';
	import Led from './led.svelte';
	import type { NumberGrid } from './utils';

	$: percent =
		Math.round($stopWatchStore.time / ($goalStore.minutes * 60 + $goalStore.seconds)) / 10;

	const size = 6;
	const length = 50;

	function isOn(value: number, perc: number): boolean {
		const variance = 3;
		if (value < perc - variance || perc === 100) return true;
		if (value > perc + variance || perc === 0) return false;
		return Math.random() > value / (perc + variance);
	}

	const progressBar: NumberGrid[] = new Array(50).fill([
		[false],
		[false],
		[false],
		[false],
		[false]
	]);
</script>

<div class="flex gap-1">
	{#each progressBar as col, i (i)}
		<div class="flex flex-col gap-1">
			{#each col as row, j (j)}
				<div class="flex gap-1">
					{#each row as _, k (k)}
						<Led blur={false} {size} on={isOn(i * (100 / length), percent)} />
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div>
