import { FC } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { LANGUAGES } from './constants'
import { changeLang, handleDropdownLang } from './slice'

interface ISelectLanguagesProps {}

const SelectLanguages: FC<ISelectLanguagesProps> = () => {
  const dispatch = useDispatch()
  const { isOpenDropdownLang, lang } = useSelector(
    (state: RootState) => state.headerReducer,
  )

  const handleChangeLang = (value: string) => {
    dispatch(changeLang(value))
    dispatch(handleDropdownLang(!isOpenDropdownLang))
  }

  const selectedLang = LANGUAGES.find((item) => item.value === lang)

  return (
    <div className="relative">
      <button
        onClick={() => dispatch(handleDropdownLang(true))}
        className="flex items-center gap-1 cursor-pointer"
      >
        <FaAngleDown />
        <span className="hover:underline text-sm underline-offset-4 font-semibold ">
          {selectedLang?.label}
        </span>
      </button>
      {isOpenDropdownLang && (
        <ul className="absolute right-0 top-6 rounded-lg bg-slate-800 py-2 z-10">
          {LANGUAGES.map((item) => (
            <li
              onClick={() => handleChangeLang(item.value)}
              key={item.value}
              className="hover:bg-secondary px-2 cursor-pointer text-sm"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SelectLanguages
