import { FC } from 'react'
import { Link } from 'react-router-dom'
import { NAV_TOP_HEADER } from '../constants'
import SelectLanguages from './SelectLanguages'
import UserAuth from './UserAuth'

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
      <UserAuth />
    </div>
  )
}

export default RightHeader