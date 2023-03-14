<script>
  import { onMount } from 'svelte'
  import { updateQueryParams, removeQueryParams } from '../utils/queryParams'
  import data from '../data/data.json'
  import { termDataStore, inputStore } from '../state/store.js'
  const listOfTerms = data.data

  let timer
  let termDataFound = undefined
  let inputValue = ''

  const debounce = (value) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      termDataFound = listOfTerms.find((term) =>
        term.name.toLowerCase().includes(value.toLowerCase())
      )
      termDataStore.set(termDataFound)
      if (termDataFound) {
        updateQueryParams(value)
      } else {
        inputStore.set(value)
        removeQueryParams('q')
      }
    }, 300)
  }

  const handleChange = (e) => {
    const value = e.target.value
    if (!value) {
      termDataStore.set(undefined)
      inputStore.set('')
      removeQueryParams('q')
      return
    }
    debounce(value)
  }

  onMount(() => {
    const url = new URL(window.location.href)
    const query = url.searchParams.get('q')
    const hasQuery = Boolean(query)
    if (hasQuery) {
      termDataFound = listOfTerms.find((term) => term.name.toLowerCase().includes(query))
      termDataStore.set(termDataFound)
      inputValue = query
    }
  })
</script>

<div class="flex items-center w-full justify-center">
  <div class="relative flex items-center w-full border-2 rounded-2xl">
    <div class="absolute inset-y items-center pl-3">
      <svg
        class="w-7 h-7 text-gray-300"
        fill="none"
        shape-rendering="geometricPrecision"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width="24"
        ><path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" /><path
          d="M16 16l4.5 4.5"
        /></svg
      >
    </div>
    <!-- svelte-ignore a11y-autofocus -->
    <input
      on:input={handleChange}
      bind:value={inputValue}
      type="input"
      autofocus
      placeholder="Enter your term"
      class="pl-12 p-2.5 w-full border-none bg-transparent h-12 text-lg outline-none text-gray-300 font-semibold selection:bg-indigo-500"
    />
  </div>
</div>
