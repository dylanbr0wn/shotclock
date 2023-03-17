<script>
	import { playingStore, start, pause } from '../Store';
	import PlayLight from './play-light.svelte';
	import Play from './play.svelte';

	function togglePlay() {
		playingStore.update((playing) => {
			if (playing) {
				pause();
			} else {
				start();
			}
			return !playing;
		});
	}
</script>

<button on:click={togglePlay} class="h-36 w-36 button-outer rounded-full p-2 group">
	<div
		class="button-inner {$playingStore
			? 'playing'
			: ''} w-full h-full rounded-full flex items-center justify-center"
	>
		<div class="group-active:scale-90 h-10 w-10 relative">
			{#if $playingStore}
				<div class="absolute top-0 left-0 w-full h-full">
					<div class="relative w-full h-full">
						<div
							class="absolute top-1/2 left-1/2 blur-xl opacity-30 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-amber-300"
						>
							<PlayLight />
						</div>
						<div class="absolute top-0 left-0 w-full h-full text-amber-100">
							<PlayLight />
						</div>
					</div>
				</div>
			{:else}
				<div class="absolute top-0 left-0 w-full h-full">
					<Play />
				</div>
			{/if}
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
