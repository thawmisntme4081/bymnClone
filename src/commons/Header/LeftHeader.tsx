import { FC } from 'react'
import { Link } from 'react-router-dom'
import { LOGO, titleLogo } from './constants'

interface ILeftHeaderProps {}

const LeftHeader: FC<ILeftHeaderProps> = () => {
  return (
    <Link to={'/'} className="flex items-center gap-4">
      <figure className="w-12 h-12">
        <img className="h-full" src={LOGO.logo} alt={LOGO.alt} />
      </figure>
      <p className="font-bold	text-2xl">{titleLogo}</p>
    </Link>
  )
}

export default LeftHeader
