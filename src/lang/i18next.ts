import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLanguage } from '../commons/helpers'
import lang from './lang'

const resources = {
  en: {
    commons: lang.commons.en,
    admin: lang.admin.en,
    // home: HEADER_EN,
  },
  fr: {
    commons: lang.commons.fr,
    admin: lang.admin.fr,
    // home: HEADER_FR,
  },
}

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLanguage(),
    fallbackLng: 'en',
    ns: ['home', 'admin', 'commons'],
    defaultNS: 'commons',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
