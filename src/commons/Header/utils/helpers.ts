import { LANGUAGES } from "../../constants"
import { getLanguage } from "../../helpers"

export const getSelectedLang = () => LANGUAGES.find((item) => item.value === getLanguage())
