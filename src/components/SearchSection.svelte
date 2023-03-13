<script>
  import Search from '../components/Search.svelte'
  import Suggestions from '../components/Suggestions.svelte'
</script>

<section class="flex flex-col text-center gap-4 w-full justify-center max-w-full sm:max-w-lg">
  <h1 class="text-white text-4xl sm:text-5xl font-bold">whatis.dev</h1>
  <p class="text-gray-200 text-lg sm:text-1xl mb-2">Enter a term to learn more about it</p>
  <Search />
  <Suggestions />
</section>
