import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { LOGO, TITLE_LOGO } from '../utils/constants'

interface ILeftHeaderProps {}

const LeftHeader: FC<ILeftHeaderProps> = () => {
  return (
    <NavLink to={'/'} className="flex items-center gap-4">
      <figure className="w-12 h-12">
        <img className="h-full" src={LOGO.logo} alt={LOGO.alt} loading="lazy" />
      </figure>
      <p className="font-bold	text-2xl">{TITLE_LOGO}</p>
    </NavLink>
  )
}

export default LeftHeader
