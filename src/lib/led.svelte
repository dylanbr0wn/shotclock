<script>
	export let on = false;
	export let size = 6;
	export let blur = true;
</script>

<div style="width:{size}px; height:{size}px" class=" relative">
	<div
		class="w-full h-full rounded-full relative {on
			? 'bg-amber-100 led-shadow z-10'
			: 'bg-neutral-900 z-0'} "
	/>
</div>

<style>
	.led-shadow {
		box-shadow: 0px 0px 15px rgba(252, 211, 77, 0.6);
	}
</style>
