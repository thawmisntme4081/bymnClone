import { LANGUAGES } from "../constants"

const getSelectedLang = () => {
  const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : LANGUAGES[0].value
  return LANGUAGES.find((item) => item.value === lang)
}

export default getSelectedLang
