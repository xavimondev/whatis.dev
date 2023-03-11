<script>
  import { termDataStore } from '../state/store.js'
</script>

<div class="flex flex-col gap-3 mb-8">
  {#each $termDataStore.meanings as meaning}
    <p class="text-gray-300 text-lg selection:bg-indigo-500">
      {meaning.description}
    </p>
  {/each}
</div>
