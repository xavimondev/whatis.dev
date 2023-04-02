import { writable } from 'svelte/store'

export const termListOptions = writable([])
export const inputStore = writable('')
export const inputValue = writable('')
export const termSelected = writable(undefined)
