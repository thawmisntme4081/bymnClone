import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'
import { handleDropdownLang } from './slice'

const Header = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleDropdownLang(false))
  }, [dispatch])

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
