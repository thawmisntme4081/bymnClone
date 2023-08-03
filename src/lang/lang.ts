import { footerLang } from '../commons/Footer/lang'
import { headerLang } from '../commons/Header/utils/lang'
import { adminLang } from '../pages/Admin/lang'

const lang = {
  ...adminLang,
  commons: {
    en: {
      ...headerLang.en,
      ...footerLang.en,
      EDIT: 'Edit',
      DELETE: 'Delete',
      SCROLL_TO_TOP: 'Scroll to top',
      NO_DATA: 'No data found',
      YES: 'Yes',
      NO: 'No',
    },
    fr: {
      ...headerLang.fr,
      ...footerLang.fr,
      EDIT: 'Modifier',
      DELETE: 'Supprimer',
      SCROLL_TO_TOP: 'Défiler vers le haut',
      NO_DATA: 'Aucune donnée disponible',
      YES: 'Oui',
      NO: 'Non',
    },
  },
}
export default lang
console.log(lang)
