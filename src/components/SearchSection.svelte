<script>
  import { getLangFromUrl, useTranslations } from '../i18n/utils'
  import InputSearch from './InputSearch.svelte'
  import Suggestions from '../components/Suggestions.svelte'
  import { termDataStore } from '../state/store.js'

  const lang = getLangFromUrl(new URL(window.location.href))
  const t = useTranslations(lang)
</script>

<section
  class={`flex flex-col text-center gap-4 justify-center max-w-xl ${
    $termDataStore ? 'animate-delay-100 animate-slideInUp' : 'animate-fadeIn'
  }`}
>
  <h1 class="text-white text-4xl sm:text-5xl font-bold">whatis.dev</h1>
  <p class="text-gray-200 text-lg sm:text-1xl mb-2">{t('home.subtitle')}</p>
  <InputSearch />
  <Suggestions />
</section>
