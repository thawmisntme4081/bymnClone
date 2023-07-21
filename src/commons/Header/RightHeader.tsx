import { FC } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import SelectLanguages from './SelectLanguages'
import { NAV_TOP_HEADER } from './constants'

interface IRightHeaderProps {}

const RightHeader: FC<IRightHeaderProps> = () => {
  return (
    <div className="flex items-center gap-5">
      {NAV_TOP_HEADER.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="hover:underline text-sm underline-offset-4 font-semibold"
        >
          {item.label}
        </Link>
      ))}
      <SelectLanguages />
      <IconContext.Provider value={{ size: '24' }}>
        <FaRegUserCircle />
      </IconContext.Provider>
    </div>
  )
}

export default RightHeader
