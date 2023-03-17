<script>
	import { playingStore, reset } from '../Store';
	import { RefreshCcw } from 'lucide-svelte';

	function resetTimer() {
		playingStore.update((playing) => {
			reset();
			return false;
		});
	}
</script>

<button on:click={resetTimer} class="h-20 w-20 button-outer rounded-full p-2 group">
	<div class="button-inner w-full h-full rounded-full flex items-center justify-center">
		<div class="group-active:scale-90 h-8 w-8">
			<RefreshCcw class="w-full h-full text-[#373737] " />
		</div>
	</div>
</button>

<style>
	.button-outer {
		background: linear-gradient(360deg, #090909 0%, #101010 100%);
		box-shadow: inset 0px -5px 2px -4px rgba(0, 0, 0, 0.59),
			inset 0px 3px 2px -4px rgba(255, 255, 255, 0.73);
	}

	.button-inner {
		background: linear-gradient(
			94.46deg,
			rgba(11, 11, 11, 0.24) 0%,
			rgba(17, 17, 17, 0.24) 50%,
			rgba(13, 13, 13, 0.24) 100%
		);
		border: 0.5px solid #000000;
	}

	.button-outer:active > .button-inner {
		box-shadow: inset 0px 4px 20px 5px rgba(0, 0, 0, 0.39);
	}
</style>
