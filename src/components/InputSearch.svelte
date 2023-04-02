<script>
  import { onMount } from 'svelte'
  import { termListOptions, inputStore, inputValue, termSelected } from '../state/store.js'
  import { getLangFromUrl, useTranslations } from '../i18n/utils'
  import { updateQueryParams, removeQueryParams } from '../utils/queryParams'
  import { searchMeaning, listOptionsByTerm } from '../utils/searchMeaning'

  let timer

  const lang = getLangFromUrl(new URL(window.location.href))
  const t = useTranslations(lang)

  const debounce = (value) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      const listOptions = listOptionsByTerm(value)
      termListOptions.set(listOptions)
      if (listOptions.length > 0) {
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
      termListOptions.set([])
      inputStore.set('')
      termSelected.set(undefined)
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
      const termData = searchMeaning(query)
      termSelected.set(termData)
      inputValue.set(query)
    }
  })
</script>

<div class="flex items-center w-full justify-center">
  <div class="relative flex items-center w-full border rounded-2xl">
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
      bind:value={$inputValue}
      type="search"
      autofocus
      placeholder={t('search.placeholder')}
      class="pl-12 p-2.5 w-full border-none bg-transparent h-12 text-lg outline-none text-gray-300 font-semibold selection:bg-indigo-500"
    />
  </div>
</div>
