<script>
  import { termSelected, inputStore, inputValue } from '@state/store.js'
  import { searchMeaning } from '@utils/searchMeaning'
  import { updateQueryParams, removeQueryParams } from '@utils/queryParams'

  const SUGGESTIONS = ['PR', 'DevOps', 'IDE', 'UX', 'CI', 'Serverless', 'Scrapping', 'Edge', 'SSR']

  const searchBySuggestion = (suggestion) => {
    inputValue.set(suggestion)
    const termData = searchMeaning(suggestion)
    termSelected.set(termData)
    if (termData) updateQueryParams(suggestion)
    else {
      inputStore.set(suggestion)
      removeQueryParams('q')
    }
  }
</script>

<div class="mt-2 sm:max-w-lg">
  <ul class="flex gap-3 flex-wrap">
    {#each SUGGESTIONS as suggestion}
      <li>
        <button
          class="bg-indigo-600 rounded-xl text-white font-semibold p-2.5 hover:bg-indigo-700 transition hover:scale-110"
          on:click={() => searchBySuggestion(suggestion)}>{suggestion}</button
        >
      </li>
    {/each}
  </ul>
</div>
