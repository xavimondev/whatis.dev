import { getLangFromUrl } from '../i18n/utils'
import enData from '../i18n/data/en.json'
import esData from '../i18n/data/es.json'

const data = {
  en: enData,
  es: esData
}

export const searchMeaning = (termValue) => {
  const lang = getLangFromUrl(new URL(window.location.href))
  const listOfTerms = data[lang].data
  return listOfTerms.find((term) =>
    term.name.toLowerCase() === termValue.toLowerCase()
  )
}
