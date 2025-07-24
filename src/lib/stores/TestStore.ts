import { writable, type Writable } from 'svelte/store';

export const TestStore: Writable<any> = writable(null);
