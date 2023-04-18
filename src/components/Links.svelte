<script>
  import { termSelected } from '@state/store.ts'
  import { getLangFromUrl, useTranslations } from '@i18n/utils'
  import VideoIc from './icons/VideoIc.svelte'
  import ScreenIc from './icons/ScreenIc.svelte'

  const lang = getLangFromUrl(new URL(window.location.href))
  const t = useTranslations(lang)
</script>

<div class="flex flex-col gap-4">
  {#if $termSelected}
    {#each $termSelected.links as { resource, type, name }}
      <a
        href={resource}
        target="_blank"
        rel="noopener noreferrer"
        class="flex bg-indigo-500 py-2.5 px-2 w-full text-white rounded-xl items-center gap-2 text-sm sm:text-base"
      >
        {#if type === 'doc'}
          <ScreenIc />
        {:else}
          <VideoIc />
        {/if}
        {t('link.text')} <span class="text-[#08031f] font-semibold">{name}</span></a
      >
    {/each}
  {/if}
</div>
