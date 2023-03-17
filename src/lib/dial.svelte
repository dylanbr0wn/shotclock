<script lang="ts">
	import Digit from './digit.svelte';
	import type { NumberGrid } from './utils';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ change: { angle: number } }>();

	export let digit: NumberGrid;
	export let angle: number = 0;

	let moving = false;
	let centerX = 0;
	let centerY = 0;

	function onMouseDown() {
		moving = true;
	}

	function round(value: number, precision = 1) {
		return Math.round(value / precision) * precision;
	}

	function onMouseMove(e: MouseEvent) {
		if (moving) {
			let newAngle = round(
				(Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180) / Math.PI + 90,
				6
			);
			if (newAngle !== angle) {
				dispatch('change', { angle: newAngle });
			}
		}
	}

	function onMouseUp() {
		moving = false;
	}

	function onMount(node: HTMLElement) {
		const bounding = node.getBoundingClientRect();
		centerX = bounding.x + bounding.width / 2;
		centerY = bounding.y + bounding.height / 2;
	}
</script>

<div use:onMount class="h-36 w-36 rounded-full dial p-2 relative">
	<div style="transform: rotate({angle}deg)" class=" h-36 w-36 absolute top-0 left-0">
		<div class="relative w-full h-full ">
			<div
				on:mousedown={onMouseDown}
				class="p-4 absolute top-0 left-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing select-none"
			>
				<div class="w-1 h-4 relative">
					<div class="w-1 h-4 rounded-full bg-amber-100" />
					<div class="w-1 h-4 rounded-full bg-amber-300 absolute top-0 left-0 blur opacity-50" />
				</div>
			</div>
		</div>
	</div>
	<div class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
		<Digit {digit} size={4} />
	</div>
	<div class="w-full h-full dial-inner rounded-full pointer-events-none p-1">
		<div class="w-full h-full rounded-full dial-inner-inner" />
	</div>
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
	.dial {
		background: linear-gradient(360deg, #090909 0%, #101010 100%);
		box-shadow: inset 0px -5px 2px -4px rgba(0, 0, 0, 0.59),
			inset 0px 3px 2px -4px rgba(255, 255, 255, 0.73);
	}
	.dial-inner {
		background: linear-gradient(180deg, #111111 0%, #0b0b0b 100%);
		border: 0.5px solid #000000;
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.91);
	}
	.dial-inner-inner {
		background: linear-gradient(180.32deg, #1b1b1b 0.28%, #0c0c0c 99.72%);
	}
</style>
