import { initReactI18next } from 'react-i18next'
import { getLanguage } from '../commons/helpers'
import i18next from 'i18next'
import HEADER_EN from './locales/en/header.json'
import HEADER_FR from './locales/fr/header.json'

const resources = {
  en: {
    home : HEADER_EN
  },
  fr: {
    home : HEADER_FR
  },
}

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLanguage(),
    fallbackLng: 'en',
    ns: ['home'],
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
