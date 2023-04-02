<script>
  import { getLangFromUrl, useTranslations } from '../i18n/utils'
  import { termListOptions, termSelected } from '../state/store.js'
  import InputSearch from './InputSearch.svelte'
  import Suggestions from '../components/Suggestions.svelte'
  import ListOptions from '../components/ListOptions.svelte'

  const lang = getLangFromUrl(new URL(window.location.href))
  const t = useTranslations(lang)
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
