import Logo from '../../../assets/logo.svg'
import { ILogo } from '../../interfaces'
import { ILinkHeader } from './interfaces'

export const LOGO: ILogo = {
  logo: Logo,
  alt: 'FC Bayern Munich official logo',
}

export const TITLE_LOGO: string = 'FC Bayern München'

export const NAV_TOP_HEADER: ILinkHeader[] = [
  { label: 'CONTACT', to: '/contact' },
  { label: 'STADIUM', to: '/stadium' },
]

export const LINK_AUTH_HEADER: ILinkHeader[] = [
  { label: 'Login', to: '/login' },
  { label: 'Register', to: '/register' },
]

export const NAVBAR_HEADER: ILinkHeader[] = [
  { label: 'News', to: '/news' },
  { label: 'FC Bayern TV', to: '/fcbayerntv' },
  { label: 'Matches', to: '/matches' },
  { label: 'Teams', to: '/teams' },
  { label: 'Club', to: '/club' },
  { label: 'Fans', to: '/fans' },
  { label: 'Tickets', to: '/tickets' },
  { label: 'Museum', to: '/museum' },
]
