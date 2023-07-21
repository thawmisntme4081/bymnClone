import { FC } from 'react'

import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  return (
    <header className="flex bg-primary relative">
      <div className="max-w-[1280px] w-full mx-auto flex justify-between py-4">
        <LeftHeader />
        <RightHeader />
      </div>
    </header>
  )
}

export default Header
