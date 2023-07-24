import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import RightBottomHeader from '../../components/hardCode/RightBottomHeader'
import { NAV_TOP_HEADER } from '../constants'
import SelectLanguages from './SelectLanguages'
import UserAuth from './UserAuth'

interface IRightHeaderProps {}

const RightHeader: FC<IRightHeaderProps> = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-5">
        {NAV_TOP_HEADER.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="hover:underline text-sm underline-offset-4 font-semibold"
          >
            {item.label}
          </NavLink>
        ))}
        <SelectLanguages />
        <UserAuth />
      </div>
      <RightBottomHeader />
    </div>
  )
}

export default RightHeader
