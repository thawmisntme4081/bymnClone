import { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Section from '../../../commons/components/Section'
import HonourItem from './HonourItem'

interface HonoursProps {}

const Honours: FC<HonoursProps> = () => {
  const settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 7,
  }

  return (
    <Section title="Honours">
      <Slider {...settings}>
        <HonourItem />
        <HonourItem />
        <HonourItem />
        <HonourItem />
        <HonourItem />
        <HonourItem />
        <HonourItem />
        <HonourItem />
        <HonourItem />
        <HonourItem />
      </Slider>
    </Section>
  )
}

export default Honours
