import storage from '$lib/store';
import { writable } from 'svelte/store';

export enum Mode {
	Stopwatch = 'stopwatch',
	Goal = 'goal'
}

type ModeStore = {
	mode: Mode;
	interval: number | undefined;
};

export const modeStore = writable<ModeStore>({
	mode: Mode.Stopwatch,
	interval: undefined
});

export const goalStore = storage<{ minutes: number; seconds: number }>('goal', {
	minutes: 0,
	seconds: 0
});

export function setGoal({ minutes, seconds }: { minutes: number; seconds: number }) {
	modeStore.update((store) => {
		clearTimeout(store.interval);
		return {
			mode: Mode.Goal,
			interval: setTimeout(() => {
				modeStore.update((store) => {
					return {
						...store,
						mode: Mode.Stopwatch
					};
				});
			}, 3000)
		};
	});

	goalStore.update(() => {
		return {
			minutes,
			seconds
		};
	});
}

const playingStore = writable(false);

type StopWatchStore = {
	time: number;
	interval: number | undefined;
};

const stopWatchStore = writable<StopWatchStore>({
	time: 0,
	interval: undefined
});

export function reset() {
	stopWatchStore.update((store) => {
		clearInterval(store.interval);
		return {
			time: 0,
			interval: undefined
		};
	});
}

export function pause() {
	stopWatchStore.update((store) => {
		clearInterval(store.interval);
		return {
			...store,
			interval: undefined
		};
	});
}

export function start() {
	modeStore.update((store) => {
		clearTimeout(store.interval);
		return {
			interval: undefined,
			mode: Mode.Stopwatch
		};
	});
	stopWatchStore.update((store) => {
		if (store.interval) {
			return store;
		}
		const interval = setInterval(() => {
			stopWatchStore.update((store) => {
				return {
					...store,
					time: store.time + 30
				};
			});
		}, 30);
		return {
			...store,
			interval
		};
	});
}

export { playingStore, stopWatchStore };
