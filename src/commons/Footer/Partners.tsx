import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

import { selectPartnersMain, selectPartnersPlatinum } from '../../app/slice'
import { getPartnersMainAndPlatinum } from '../../app/thunk'
import { useAppSelector } from '../hooks/useAppSelector'
import { useThunkDispatch } from '../hooks/useDispatch'

interface PartnersProps {}

const Partners: FC<PartnersProps> = () => {
  const partnersMain = useAppSelector(selectPartnersMain)
  const partnersPlatinum = useAppSelector(selectPartnersPlatinum)
  const { t } = useTranslation()

  const thunkDispatch = useThunkDispatch()

  useEffect(() => {
    thunkDispatch(getPartnersMainAndPlatinum())
  }, [thunkDispatch])

  return (
    <>
      <Link to={'/partner'} className="text-xl font-bold mb-8 uppercase">
        {t('PARTNER')}
      </Link>
      <div className="max-w-[760px]">
        <div className="flex-center gap-10 mb-8">
          {partnersMain.map((partner) => (
            <a
              key={partner._id}
              href={partner.link}
              target="_blank"
              rel="noreferrer"
            >
              <LazyLoadImage src={partner.logo} alt={partner.name} />
            </a>
          ))}
        </div>
        <div className="flex-center flex-wrap gap-x-10 mb-8 px-14">
          {partnersPlatinum.map((partner) => (
            <a
              key={partner._id}
              href={partner.link}
              className="mb-8"
              target="_blank"
              rel="noreferrer"
            >
              <LazyLoadImage src={partner.logo} alt={partner.name} />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Partners
