<script>
  import Definitions from './Definitions.svelte'
  import Links from './Links.svelte'
  import { termDataStore } from '../state/store.js'
</script>

{#if $termDataStore}
  <section class="flex flex-col max-w-xl">
    <h2 class="text-white font-semibold text-2xl mb-8 text-center">
      What is <span class="text-indigo-600"> {$termDataStore.name}</span> ?
    </h2>
    <Definitions />
    <div class="flex flex-col gap-4 mb-8">
      <h3 class="text-white text-xl">Some links to dive deeper into</h3>
      <Links />
    </div>
  </section>
{/if}
