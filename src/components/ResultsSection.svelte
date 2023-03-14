<script>
  import Definitions from './Definitions.svelte'
  import Links from './Links.svelte'
  import { termDataStore, inputStore } from '../state/store.js'
</script>

{#if $termDataStore}
  <section class="flex flex-col max-w-xl animate-delay-200 animate-slideInUp">
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
{#if $termDataStore == undefined && $inputStore !== ''}
  <p class="font-semibold text-xl sm:text-2xl text-white flex items-center gap-1">
    There is not result for: <span class="text-indigo-900 font-semibold">{$inputStore}</span> 🥲
  </p>
{/if}
