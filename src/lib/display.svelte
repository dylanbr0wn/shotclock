<script>
	import '@fontsource/martian-mono';
	import { stopWatchStore, modeStore, goalStore, Mode } from '../Store';
	import DigitSeperator from './digit-seperator.svelte';
	import Digit from './digit.svelte';
	import { ColonGrid, parseMultiDigitNumber } from './utils';

	$: minutes = parseMultiDigitNumber(
		('0' + Math.floor(($stopWatchStore.time / 60000) % 60)).slice(-2)
	);

	$: seconds = parseMultiDigitNumber(
		('0' + Math.floor(($stopWatchStore.time / 1000) % 60)).slice(-2)
	);
	$: decaseconds = parseMultiDigitNumber(
		('0' + Math.floor(($stopWatchStore.time / 10) % 100)).slice(-2)
	);
	$: goalMinutes = parseMultiDigitNumber(('0' + Math.floor($goalStore.minutes % 60)).slice(-2));
	$: goalSeconds = parseMultiDigitNumber(('0' + Math.floor($goalStore.seconds % 60)).slice(-2));

	const size = 7;
</script>

<div class="display-outer rounded-xl h-36 w-96 p-2">
	<div
		class="display-inner  w-full h-full rounded overflow-hidden text-4xl flex justify-center items-center relative"
	>
		{#if $modeStore.mode === Mode.Goal}
			<div class="absolute top-0 left-0 p-3 text-sm text-amber-100 z-10 goal-text font-bold italic">
				Goal
			</div>
		{/if}
		<div class="relative z-10">
			{#if $modeStore.mode === Mode.Stopwatch}
				<span class="text-sky-100 flex gap-1">
					{#each minutes as minute, index}
						<Digit {size} digit={minute} />
						{#if index !== decaseconds.length - 1}
							<DigitSeperator {size} />
						{/if}
					{/each}
					<Digit {size} digit={ColonGrid} />
					{#each seconds as second, index}
						<Digit {size} digit={second} />
						{#if index !== decaseconds.length - 1}
							<DigitSeperator {size} />
						{/if}
					{/each}
					<Digit {size} digit={ColonGrid} />
					{#each decaseconds as decasecond, index}
						<Digit {size} digit={decasecond} />
						{#if index !== decaseconds.length - 1}
							<DigitSeperator {size} />
						{/if}
					{/each}
				</span>
			{:else}
				<span class="text-sky-100 flex gap-1">
					{#each goalMinutes as minute, index}
						<Digit {size} digit={minute} />
						{#if index !== decaseconds.length - 1}
							<DigitSeperator {size} />
						{/if}
					{/each}
					<Digit {size} digit={ColonGrid} />
					{#each goalSeconds as second, index}
						<Digit {size} digit={second} />
						{#if index !== decaseconds.length - 1}
							<DigitSeperator {size} />
						{/if}
					{/each}
				</span>
			{/if}
		</div>
		<div class="texture absolute top-0 left-0 w-full h-full z-0" />
	</div>
</div>

<style>
	.goal-text {
		font-family: 'Martian Mono', monospace;
	}
	.display-outer {
		background: linear-gradient(360deg, #090909 0%, #101010 100%);
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15), inset 0px -3px 2px -4px rgba(0, 0, 0, 0.25),
			inset 0px 3px 2px -4px rgba(255, 255, 255, 0.73);
	}

	.display-inner {
		background: linear-gradient(
			94.46deg,
			rgba(11, 11, 11, 0.24) 0%,
			rgba(17, 17, 17, 0.24) 50%,
			rgba(13, 13, 13, 0.24) 100%
		);
		border: 0.5px solid #000000;
	}

	.texture {
		background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23111111' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E");
	}
</style>
