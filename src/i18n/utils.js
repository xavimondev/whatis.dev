import { ui, defaultLang } from './ui'

export const getLangFromUrl = (url) => {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang
  return defaultLang
}

export const useTranslations = (lang) => (key) => {
  return ui[lang][key] || ui[defaultLang][key]
}
