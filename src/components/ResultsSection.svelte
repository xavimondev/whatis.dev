<script>
  import { fly } from 'svelte/transition'
  import { termSelected, inputStore } from '@state/store.ts'
  import { getLangFromUrl, useTranslations } from '@i18n/utils'
  import Definitions from './Definitions.svelte'
  import Links from './Links.svelte'

  const lang = getLangFromUrl(new URL(window.location.href))
  const t = useTranslations(lang)
</script>

{#if $termSelected}
  <section
    class="mt-12 flex flex-col max-w-xl"
    transition:fly={{ y: 500, duration: 600, delay: 300 }}
  >
    <h2 class="text-white font-semibold text-2xl mb-8 text-center">
      {t('question.title')} <span class="text-indigo-600"> {$termSelected.name}</span> ?
    </h2>
    <Definitions />
    <div class="flex flex-col gap-4 mb-8">
      <h3 class="text-white text-xl">{t('title.links')}</h3>
      <Links />
    </div>
  </section>
{/if}
{#if $termSelected == undefined && $inputStore !== ''}
  <p class="mt-12 font-semibold text-xl sm:text-2xl text-white text-center selection:bg-indigo-500">
    {t('error.result')}: <span class="text-indigo-900 font-semibold">{$inputStore}</span> 🥲
  </p>
{/if}
