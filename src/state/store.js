import { writable } from 'svelte/store'

// Load option list as user is typing on input search
export const termListOptions = writable([])
// Used to show wrong term that does not exist
export const inputStore = writable('')
// Used to show input's value on field
export const inputValue = writable('')
// Term selected by user
export const termSelected = writable(undefined)
