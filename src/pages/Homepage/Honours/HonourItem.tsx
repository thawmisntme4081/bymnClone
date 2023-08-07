import { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

interface HonourItemProps {}

const HonourItem: FC<HonourItemProps> = () => {
  return (
    <Link to={'/honours'}>
      <div className="bg-[#121f38] px-6 py-9 flex-col-between transition ease-in-out delay-200 hover:bg-[#243047] hover:shadow-[rgb(0,0,0)_0px_4px_16px] ">
        <LazyLoadImage
          src="https://img.fcbayern.com/image/upload/t_cms-1x1/f_auto/w_220,c_fill/q_auto/v1631524987/cms/public/images/fcbayern-com/media/images/erlebniswelt/erfolge/dfl_pokale.png"
          alt=""
        />
        <div className="text-center">
          <p className="text-sm font-semibold">German Championship</p>
          <p className="mt-1 text-xl font-bold">33</p>
        </div>
      </div>
    </Link>
  )
}

export default HonourItem
