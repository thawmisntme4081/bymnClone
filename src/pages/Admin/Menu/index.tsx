import { faHouse, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface IAdminMenuProps {}

export const menu = [
  {
    id: 1,
    title: 'Homepage',
    url: '/admin',
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    id: 2,
    title: 'Club',
    url: '/admin/club',
    icon: <FontAwesomeIcon icon={faUsers} />,
  },
]

const Menu: FC<IAdminMenuProps> = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="flex flex-col gap-3 mb-5" key={item.id}>
          <NavLink
            to={item.url}
            className="flex items-center gap-3 p-3 rounded-md hover:bg-primary"
            key={item.id}
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
