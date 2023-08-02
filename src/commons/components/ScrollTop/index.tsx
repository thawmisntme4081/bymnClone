import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ScrollTopProps {}

const ScrollTop: FC<ScrollTopProps> = () => {
  const { t } = useTranslation()
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <button
      className="px-4 py-2 fixed -translate-x-1/2 bottom-10 left-1/2 bg-primary hover:bg-[#ff4d5b] rounded-full font-semibold"
      onClick={handleScrollTop}
    >
      {t('SCROLL_TO_TOP')}
    </button>
  )
}

export default ScrollTop
