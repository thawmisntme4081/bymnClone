import { FC } from 'react'
import StoreLogo from '../../../assets/store.svg'
import Telekom from '../../../assets/telekom_header.svg'
import { useTranslation } from 'react-i18next'

interface IRightBottomHeaderProps {}

const RightBottomHeader: FC<IRightBottomHeaderProps> = () => {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-end">
      <div className="flex items-end gap-3 cursor-pointer hover:opacity-90">
        <span className="text-xs">{t('header.PRESENTED_BY')}</span>
        <figure>
          <img src={Telekom} alt="Telekom" />
        </figure>
      </div>
      <div className="inline-flex h-5 w-[1px] opacity-50 bg-[#f0f0f0] mx-3"></div>
      <div className="flex items-center gap-1 bg-white rounded px-3 cursor-pointer hover:opacity-90">
        <figure>
          <img src={StoreLogo} alt={t('header.ONLINE_STORE')} />
        </figure>
        <span className="text-sm text-primary leading-6 font-semibold">
          {t('header.ONLINE_STORE')}
        </span>
      </div>
    </div>
  )
}

export default RightBottomHeader
