import { FC, ReactNode, Suspense, useEffect, useState } from 'react'
import Footer from '../commons/Footer'
import Header from '../commons/Header'
import ScrollTop from '../commons/components/ScrollTop'

interface IPublicLayoutProps {
  children: ReactNode
}

const PublicLayout: FC<IPublicLayoutProps> = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false)
  const [prevScrollY, setPrevScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > prevScrollY || !currentScrollY) {
        setShowScrollTop(false)
      } else {
        setShowScrollTop(true)
      }

      setPrevScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollY])

  return (
    <>
      <Header />
      <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
      {showScrollTop && <ScrollTop />}
      <Footer />
    </>
  )
}

export default PublicLayout
