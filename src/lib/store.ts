import { browser } from '$app/environment';
import type { Writable } from 'svelte/store';
import { writable, get } from 'svelte/store';
import * as devalue from 'devalue';

const storage = <T>(key: string, initValue: T): Writable<T> => {
	const store = writable(initValue);
	if (!browser) return store;

	const storedValueStr = localStorage.getItem(key);
	if (storedValueStr != null) store.set(devalue.parse(storedValueStr));

	store.subscribe((val) => {
		if (val === undefined || val === null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, devalue.stringify(val));
		}
	});

	window.addEventListener('storage', () => {
		const storedValueStr = localStorage.getItem(key);
		if (storedValueStr == null) return;

		const localValue: T = devalue.parse(storedValueStr);
		if (localValue !== get(store)) store.set(localValue);
	});

	return store;
};

export default storage;
