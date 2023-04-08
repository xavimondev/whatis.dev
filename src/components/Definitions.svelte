<script>
  import { termSelected } from '../state/store.js'
</script>

<div class="flex flex-col gap-3 mb-8">
  {#if $termSelected}
    {#each $termSelected.meanings as meaning}
      <p class="text-gray-300 text-lg selection:bg-indigo-500">
        {meaning.description}
      </p>
    {/each}
  {/if}
</div>
