import { footerLang } from '../commons/Footer/lang'
import { headerLang } from '../commons/Header/utils/lang'
import { adminLang } from '../pages/Admin/lang'

const lang = {
  ...adminLang,
  commons: {
    en: {
      ...headerLang.en,
      ...footerLang.en,
      ADD: 'Add',
      DELETE: 'Delete',
      RESET: 'Reset',
      SCROLL_TO_TOP: 'Scroll to top',
      EDIT: 'Edit',
      NO_DATA: 'No data found',
      YES: 'Yes',
      NO: 'No',
    },
    fr: {
      ...headerLang.fr,
      ...footerLang.fr,
      ADD: 'Ajouter',
      EDIT: 'Modifier',
      DELETE: 'Supprimer',
      RESET: 'Réinitialiser',
      SCROLL_TO_TOP: 'Défiler vers le haut',
      NO_DATA: 'Aucune donnée disponible',
      YES: 'Oui',
      NO: 'Non',
    },
  },
}
export default lang
