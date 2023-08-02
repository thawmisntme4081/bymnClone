import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import RightBottomHeader from '../../components/hardCode/RightBottomHeader'
import { NAV_TOP_HEADER } from '../utils/constants'
import SelectLanguages from './SelectLanguages'
import UserAuth from './UserAuth'
import { useTranslation } from 'react-i18next'

interface IRightHeaderProps {}

const RightHeader: FC<IRightHeaderProps> = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-end gap-5">
        {NAV_TOP_HEADER.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="hover:underline text-sm underline-offset-4 font-semibold"
          >
            {t(item.label)}
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
