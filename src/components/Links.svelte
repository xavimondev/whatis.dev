<script>
  import { termDataStore } from '../state/store.js'
</script>

<div class="flex flex-col gap-4">
  {#each $termDataStore.links as link}
    <a
      href={link.resource}
      target="_blank"
      rel="noopener noreferer"
      class="block bg-indigo-500 py-2.5 w-full text-center text-white rounded-xl"
      >Read more about this on <span class="text-indigo-900 font-semibold">{link.name}</span></a
    >
  {/each}
</div>
