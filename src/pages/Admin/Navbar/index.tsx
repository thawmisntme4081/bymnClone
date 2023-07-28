import {
  faBell,
  faGear,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { LOGO } from '../../../commons/Header/constants'

interface IAdminNavbarProps {}

const Navbar: FC<IAdminNavbarProps> = () => {
  return (
    <div className="p-5 flex items-center justify-between">
      <figure className="flex items-center font-bold gap-3 h-8 w-8">
        <img className="w-full" src={LOGO.logo} alt={LOGO.alt} />
      </figure>
      <div className="flex items-center gap-5">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        <div className="relative">
          <FontAwesomeIcon icon={faBell} size="lg" />
          <span className="absolute flex items-center justify-center bg-primary text-white w-4 h-4 rounded-full -top-2 -right-2 text-[12px]">
            1
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img
            className="w-7 h-7 rounded-full object-cover"
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="Jane"
          />
          <span>Jane</span>
        </div>
        <FontAwesomeIcon icon={faGear} size="lg" />
      </div>
    </div>
  )
}

export default Navbar
