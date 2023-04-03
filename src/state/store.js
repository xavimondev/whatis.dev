import { writable } from 'svelte/store'

// Used to show wrong term that does not exist
export const inputStore = writable('')
// Used to show input's value on field
export const inputValue = writable('')
// Term selected by user
export const termSelected = writable(undefined)
