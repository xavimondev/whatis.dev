<script>
  import { onMount } from 'svelte'
  import { termSelected, inputValue, inputStore } from '../state/store.js'
  import { updateQueryParams, removeQueryParams } from '../utils/queryParams'
  import { getLangFromUrl, useTranslations } from '../i18n/utils'
  import { searchMeaning, listOptionsByTerm } from '../utils/searchMeaning'
  import InputSearch from './InputSearch.svelte'
  import Suggestions from './Suggestions.svelte'
  import ListOptions from './ListOptions.svelte'

  const lang = getLangFromUrl(new URL(window.location.href))
  const t = useTranslations(lang)

  let timer
  let termListOptions = []

  const debounce = (value) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      const listOptions = listOptionsByTerm(value)
      termListOptions = listOptions
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
      termListOptions = []
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

<section
  class={`flex flex-col text-center gap-4 justify-center max-w-xl ${
    $termSelected ? 'animate-delay-100 animate-slideInUp' : 'animate-fadeIn'
  }`}
>
  <h1 class="text-white text-4xl sm:text-5xl font-bold">whatis.dev</h1>
  <p class="text-gray-200 text-lg sm:text-1xl mb-2">{t('home.subtitle')}</p>
  <div class="relative">
    <InputSearch {handleChange} hasOptions={termListOptions.length > 0} />
    {#if termListOptions.length > 0}
      <ListOptions {termListOptions} />
    {/if}
  </div>
  <Suggestions />
</section>
