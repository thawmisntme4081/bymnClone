import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { getPartners } from '../../pages/Admin/Layouts/Partners/utils/thunk'
import Container from '../components/Container'
import { useAppSelector } from '../hooks/useAppSelector'
import { useThunkDispatch } from '../hooks/useDispatch'
import { selectPartnersNonPrimary, selectPartnersPrimary } from './slice'

const Footer = () => {
  const { t } = useTranslation()
  const thunkDispatch = useThunkDispatch()

  const partnersPrimary = useAppSelector(selectPartnersPrimary)
  const partnersNonPrimary = useAppSelector(selectPartnersNonPrimary)

  useEffect(() => {
    thunkDispatch(getPartners())
  }, [thunkDispatch])

  return (
    <footer className="bg-primary">
      <Container className="flex flex-col items-center pt-8">
        <Link to={'/partner'} className="text-xl font-bold mb-8 uppercase">
          {t('PARTNER')}
        </Link>
        <div className="max-w-[760px]">
          <div className="flex-center gap-10 mb-8">
            {partnersPrimary.map((partner) => (
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
            {partnersNonPrimary.map((partner) => (
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
      </Container>
    </footer>
  )
}

export default memo(Footer)
