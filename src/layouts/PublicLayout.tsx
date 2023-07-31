import { FC, ReactNode, Suspense } from 'react'
import Footer from '../commons/Footer'
import Header from '../commons/Header'

interface IPublicLayoutProps {
  children: ReactNode
}

const PublicLayout: FC<IPublicLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
      <Footer />
    </>
  )
}

export default PublicLayout
