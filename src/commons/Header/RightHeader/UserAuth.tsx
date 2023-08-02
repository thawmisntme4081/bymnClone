import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'
import useClickAway from '../../hooks/useClickAway'
import { LINK_AUTH_HEADER } from '../utils/constants'
import FlexCenter from '../../components/FlexCenter'

interface IUserAuthProps {}

const UserAuth: FC<IUserAuthProps> = () => {
  const { ref, isOpen, setIsOpen } = useClickAway(false)
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsOpen((prev) => !prev)
  }
  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex items-center gap-1 cursor-pointer"
      >
        <FontAwesomeIcon icon={faCircleUser} className="text-2xl" />
      </button>
      {isOpen && (
        <div
          ref={ref}
          className="absolute right-0 top-11 z-10 bg-primary shadow-[0px_2px_32px_0px_rgba(0,0,0,0.8)] w-60"
        >
          <FlexCenter className="bg-black/[0.1] h-44">
            <FontAwesomeIcon icon={faCircleUser} className="text-[80px]" />
          </FlexCenter>
          {LINK_AUTH_HEADER.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="block text-center font-semibold leading-10 border-b border-black/[0.1] hover:bg-white/[0.1]"
            >
              {item.label}
            </NavLink>
          ))}
          <div className="p-3 relative">
            <select className="w-full bg-black/[0.1] py-2 pl-3 pr-8 appearance-none text-sm font-semibold">
              <option value="auto" selected>
                Automatic theme
              </option>
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
            </select>
            {/* <FaCaretDown className="absolute right-5 top-2/4 -translate-y-1/2" /> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserAuth
