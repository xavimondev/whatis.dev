<script>
  import { termSelected, inputValue } from '@state/store.ts'
  import { searchMeaning } from '@utils/searchMeaning.js'
  import { updateQueryParams } from '@utils/queryParams.js'

  export let termListOptions = []
  // Keyboard events
  let hiLiteIndex = null

  const setState = (termData) => {
    const { id } = termData
    termSelected.set(termData)
    inputValue.set(id)
    // Clear options list after user selects a term
    termListOptions = []
    // Update query param in URL
    updateQueryParams(id)
  }

  const getMeaning = (termId) => {
    const termData = searchMeaning(termId)
    setState(termData)
  }

  const navigateList = (e) => {
    if (e.key === 'ArrowDown' && hiLiteIndex <= termListOptions.length - 1) {
      hiLiteIndex === null ? (hiLiteIndex = 0) : (hiLiteIndex += 1)
    } else if (e.key === 'ArrowUp' && hiLiteIndex !== null) {
      hiLiteIndex === 0 ? (hiLiteIndex = termListOptions.length - 1) : (hiLiteIndex -= 1)
    } else if (e.key === 'Enter') {
      const termData = termListOptions.at(hiLiteIndex).item
      setState(termData)
    } else {
      return
    }
  }
</script>

<svelte:window on:keydown={navigateList} />
<div class="absolute rounded-md w-full bg-[#13111C] z-10">
  <ul class="text-left w-full border rounded-b-2xl border-t-0 overflow-hidden">
    {#each termListOptions as { item, matches }, i}
      {@const { name, id } = item}
      {@const [{ indices }] = matches}
      {@const [bestMatch] = indices.sort((a, b) => b[1] - b[0] - (a[1] - a[0]))}
      {@const html = `${name.slice(0, bestMatch[0])}<span class="bg-yellow-800">${name.slice(
        bestMatch[0],
        bestMatch[1] + 1
      )}</span>${name.slice(bestMatch[1] + 1)}`}
      <li
        class={`font-semibold text-white px-4 py-2.5 hover:bg-indigo-500/30 first:pt-4 ${
          i === hiLiteIndex ? 'bg-indigo-500/30' : ''
        }`}
        on:click={() => getMeaning(id)}
      >
        {@html html}
      </li>
    {/each}
  </ul>
</div>
