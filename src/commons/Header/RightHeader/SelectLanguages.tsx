import { FC, MouseEvent } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import useClickAway from '../../hooks/useClickAway'
import { LANGUAGES } from '../constants'
import getSelectedLang from '../helpers'
import { changeLang } from '../slice'

interface ISelectLanguagesProps {}

const SelectLanguages: FC<ISelectLanguagesProps> = () => {
  const dispatch = useDispatch()
  const { ref, isOpen, setIsOpen } = useClickAway(false)
  const selectedLang = getSelectedLang()

  const handleChangeLang = (value: string) => {
    localStorage.setItem('lang', value as string)
    dispatch(changeLang(value))
    setIsOpen(false)
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex items-center gap-1 cursor-pointer"
      >
        <FaAngleDown />
        <span className="hover:underline text-sm underline-offset-4 font-semibold pointer-events-none">
          {selectedLang?.label}
        </span>
      </button>
      {isOpen && (
        <div
          ref={ref}
          className="absolute right-0 top-6 rounded-lg bg-slate-800 py-2 z-10"
        >
          {LANGUAGES.map((item) => (
            <div
              onClick={() => handleChangeLang(item.value)}
              key={item.value}
              className="hover:bg-secondary px-3 cursor-pointer text-sm"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectLanguages
