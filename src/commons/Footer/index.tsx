import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { SECONDARY_PARTNERS, TOP_PARTNERS } from './constants'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="bg-primary">
      <Container className="flex flex-col items-center pt-8">
        <Link to={'/partner'} className="text-xl font-bold mb-8 uppercase">
          {t('PARTNER')}
        </Link>
        <div className="max-w-[760px]">
          <div className="flex-center gap-10 mb-8">
            {TOP_PARTNERS.map((partner) => (
              <a
                key={partner.link}
                href={partner.link}
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img src={partner.logo} alt={partner.alt} loading="lazy" />
                </figure>
              </a>
            ))}
          </div>
          <div className="flex-center flex-wrap gap-x-10 mb-8 px-14">
            {SECONDARY_PARTNERS.map((partner) => (
              <a
                key={partner.link}
                href={partner.link}
                className="mb-8"
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img src={partner.logo} alt={partner.alt} loading="lazy" />
                </figure>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default memo(Footer)
