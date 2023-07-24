import { FC } from 'react'

import Container from '../components/Container'
import LeftHeader from './LeftHeader'
import Navbar from './Navbar'
import RightHeader from './RightHeader'

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  return (
    <>
      <header className="bg-primary relative">
        <Container className="flex justify-between py-4">
          <LeftHeader />
          <RightHeader />
        </Container>
      </header>
      <Navbar />
    </>
  )
}

export default Header
