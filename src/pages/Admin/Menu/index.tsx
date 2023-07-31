import {
  faHandshake,
  faHouse,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface IAdminMenuProps {}

export const menu = [
  {
    title: 'Homepage',
    url: '/admin',
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    title: 'Club',
    url: '/admin/club',
    icon: <FontAwesomeIcon icon={faUsers} />,
  },
  {
    title: 'Partners',
    url: '/admin/partners',
    icon: <FontAwesomeIcon icon={faHandshake} />,
  },
]

const Menu: FC<IAdminMenuProps> = () => {
  return (
    <div className="px-3 border-r-2 border-r-[#384256]">
      {menu.map((item) => (
        <div className="flex flex-col gap-3 mb-5" key={item.title}>
          <NavLink
            to={item.url}
            className="flex items-center gap-3 p-3 rounded-md hover:bg-primary"
          >
            {item.icon}
            <span className="hidden lg:block">{item.title}</span>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default Menu
