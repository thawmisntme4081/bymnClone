import { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Section from '../../../commons/components/Section'
import NextButton from '../../../commons/components/slider/NextButton'
import PrevButton from '../../../commons/components/slider/PrevButton'
import HonourItem from './HonourItem'

interface HonoursProps {}
const LENGTH = 15

const Honours: FC<HonoursProps> = () => {
  const settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 7,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  }

  return (
    <Section title="Honours">
      <Slider {...settings}>
        {[...Array(LENGTH)].map((item, index) => (
          <HonourItem key={index} />
        ))}
      </Slider>
    </Section>
  )
}

export default Honours
