<script>
  import Search from '../components/Search.svelte'
  import Suggestions from '../components/Suggestions.svelte'
  import { termDataStore } from '../state/store.js'
</script>

<section
  class={`flex flex-col text-center gap-4 justify-center max-w-xl ${
    $termDataStore ? 'animate-delay-100 animate-slideInUp' : 'animate-fadeIn'
  }`}
>
  <h1 class="text-white text-4xl sm:text-5xl font-bold">whatis.dev</h1>
  <p class="text-gray-200 text-lg sm:text-1xl mb-2">Enter a term to learn more about it</p>
  <Search />
  <Suggestions />
</section>
