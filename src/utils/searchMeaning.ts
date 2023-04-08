import Fuse from 'fuse.js'
import type { Term } from '@customTypes/index'
import { getLangFromUrl } from '@i18n/utils'
import enData from '@i18n/data/en.json'
import esData from '@i18n/data/es.json'

const data = {
  en: enData,
  es: esData
}

export const listOptionsByTerm = (query: string) => {
  const lang = getLangFromUrl(new URL(window.location.href))
  const listOfTerms = data[lang].data
  const fuse = new Fuse(listOfTerms, {
    keys: ['name'],
    isCaseSensitive: false,
    includeMatches: true,
    findAllMatches: true,
    minMatchCharLength: 2
  })
  return fuse.search(query)
}

export const searchMeaning = (termInput: string): Term => {
  const lang = getLangFromUrl(new URL(window.location.href))
  const listOfTerms = data[lang].data
  return listOfTerms.find((term: Term) => term.name.toLowerCase() === termInput.toLowerCase())
}
