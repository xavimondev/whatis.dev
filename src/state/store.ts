import type { Term } from '@customTypes/index'
import { writable } from 'svelte/store'

// Used to show wrong term that does not exist
export const inputStore = writable<string>('')
// Used to show input's value on field
export const inputValue = writable<string>('')
// Term selected by user
export const termSelected = writable<Term | undefined>(undefined)
