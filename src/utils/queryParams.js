export const updateQueryParams = (newQuery) => {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search.slice(1))
  params.set('q', newQuery)

  url.search = params.toString()
  const finalUrl = url.toString()

  window.history.pushState(null, '', finalUrl)
}

export const removeQueryParams = (key) => {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search.slice(1))

  params.delete(key)
  url.search = params.toString()

  window.history.pushState(null, '', url.toString())
}
