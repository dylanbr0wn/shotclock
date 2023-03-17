<script lang="ts">
	import Reset from '../lib/reset.svelte';
	import Display from '../lib/display.svelte';
	import PlayPause from '../lib/play-pause.svelte';
	import Dial from '../lib/dial.svelte';
	import { GridM, GridS } from '$lib/utils';
	import Save from '$lib/save.svelte';

	import { goalStore, setGoal } from '../Store';
	import Progress from '$lib/progress.svelte';
	import SideDecoration from '$lib/side-decoration.svelte';

	function handleMinuteGoal(event: CustomEvent<{ angle: number }>) {
		let angle = event.detail.angle;
		if (angle < 0) {
			angle = 360 + angle;
		}
		setGoal({
			minutes: Math.floor(angle / 6),
			seconds: $goalStore.seconds
		});
	}
	function handleSecondGoal(event: CustomEvent<{ angle: number }>) {
		let angle = event.detail.angle;
		if (angle < 0) {
			angle = 360 + angle;
		}
		setGoal({
			minutes: $goalStore.minutes,
			seconds: Math.floor(angle / 6)
		});
	}
</script>

<div class="flex flex-col gap-6 items-center">
	<div class="flex gap-8 items-center">
		<Dial on:change={handleMinuteGoal} digit={GridM} angle={$goalStore.minutes * 6} /><Display
		/><Dial on:change={handleSecondGoal} digit={GridS} angle={$goalStore.seconds * 6} />
	</div>
	<div class="flex gap-6 items-center">
		<div class="w-full"><Reset /></div>
		<div class="w-full"><PlayPause /></div>
		<div class="w-full"><Save /></div>
	</div>
	<Progress />
</div>
