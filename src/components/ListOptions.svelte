<script>
  import { searchMeaning } from '../utils/searchMeaning.js'
  import { termListOptions, termSelected, inputValue } from '../state/store.js'
  import { updateQueryParams } from '../utils/queryParams.js'

  const getMeaning = (term) => {
    const termData = searchMeaning(term)
    termSelected.set(termData)
    inputValue.set(term)
    // Clear options list after user selects a term
    termListOptions.set([])
    // Update query param in URL
    updateQueryParams(term)
  }
</script>

<div class="absolute rounded-md w-full bg-[#13111C] z-10">
  <ul class="text-left w-full border border-gray-200 rounded-2xl overflow-hidden">
    {#each $termListOptions as { item, matches }}
      {@const { name, id } = item}
      {@const [{ indices }] = matches}
      {@const [bestMatch] = indices.sort((a, b) => b[1] - b[0] - (a[1] - a[0]))}
      {@const html =
        name.slice(0, bestMatch[0]) +
        '<span class="bg-yellow-800">' +
        name.slice(bestMatch[0], bestMatch[1] + 1) +
        '</span>' +
        name.slice(bestMatch[1] + 1)}
      <li
        class="font-semibold text-white px-4 py-2.5 hover:bg-indigo-500/30 first:pt-4"
        on:click={() => getMeaning(id)}
      >
        {@html html}
      </li>
    {/each}
  </ul>
</div>
