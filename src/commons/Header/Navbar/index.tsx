import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { NAVBAR_HEADER } from '../utils/constants'

interface INavbarProps {}

const Navbar: FC<INavbarProps> = () => {
  return (
    <nav className="bg-secondary sticky top-0 h-11">
      <div className="max-w-[1280px] w-full mx-auto flex gap-5 font-semibold">
        {NAVBAR_HEADER.map((item) => (
          <NavLink key={item.to} to={item.to} className="py-2 hover:border-b-2">
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
