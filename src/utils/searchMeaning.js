import data from '../data/data.json'

export const searchMeaning = (termValue) => {
  const listOfTerms = data.data
  return listOfTerms.find((term) =>
    term.name.toLowerCase() === termValue.toLowerCase()
  )
}
