<script>
  import { onMount } from 'svelte'
  import { termListOptions, termSelected, inputValue } from '../state/store.js'
  import { getLangFromUrl, useTranslations } from '../i18n/utils'
  import { searchMeaning } from '../utils/searchMeaning'
  import InputSearch from './InputSearch.svelte'
  import Suggestions from '../components/Suggestions.svelte'
  import ListOptions from '../components/ListOptions.svelte'

  const lang = getLangFromUrl(new URL(window.location.href))
  const t = useTranslations(lang)

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
    <InputSearch />
    {#if $termListOptions.length > 0}
      <ListOptions />
    {/if}
  </div>
  <Suggestions />
</section>
