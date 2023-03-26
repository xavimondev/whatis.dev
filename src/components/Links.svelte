<script>
  import { getLangFromUrl, useTranslations } from '../i18n/utils'
  import VideoIc from '../components/icons/VideoIc.svelte'
  import ScreenIc from '../components/icons/ScreenIc.svelte'
  import { termDataStore } from '../state/store.js'

  const lang = getLangFromUrl(new URL(window.location.href))
  const t = useTranslations(lang)
</script>

<div class="flex flex-col gap-4">
  {#each $termDataStore.links as { resource, type, name }}
    <a
      href={resource}
      target="_blank"
      rel="noopener noreferrer"
      class="flex bg-indigo-500 py-2.5 px-2 w-full text-white rounded-xl items-center gap-2"
    >
      {#if type === 'doc'}
        <ScreenIc />
      {:else}
        <VideoIc />
      {/if}
      {t('link.text')} <span class="text-indigo-900 font-semibold">{name}</span></a
    >
  {/each}
</div>
