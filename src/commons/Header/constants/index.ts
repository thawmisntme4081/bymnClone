import Logo from '../../svg/logo.svg'

interface ILogo {
  logo: string,
  alt: string
}

export const LOGO: ILogo = {
  logo: Logo,
  alt: "FC Bayern Munich official logo"
}

export const titleLogo: string = 'FC Bayern München'

interface ILang {
  label: string,
  value: string
}

export const LANGUAGES: ILang[] = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
]

interface INavTopHeader {
  label: string,
  to: string
}

export const NAV_TOP_HEADER: INavTopHeader[] = [
  { label: 'Contact', to: '/contact' },
  { label: 'Allianz Arena', to: '/stadium' },
]
