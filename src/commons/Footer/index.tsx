import { memo } from 'react'
import Container from '../components/Container'
import Partners from './Partners'

const Footer = () => {
  return (
    <footer className="bg-primary">
      <Container className="flex flex-col items-center pt-8">
        <Partners />
      </Container>
    </footer>
  )
}

export default memo(Footer)
