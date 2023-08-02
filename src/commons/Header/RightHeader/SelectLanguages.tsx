import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import useClickAway from '../../hooks/useClickAway'
import { LANGUAGES } from '../../constants'
import { changeLang } from '../utils/slice'
import { getSelectedLang } from '../utils/helpers'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

interface ISelectLanguagesProps {}

const SelectLanguages: FC<ISelectLanguagesProps> = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { ref, isOpen, setIsOpen } = useClickAway(false)
  const selectedLang = getSelectedLang()

  const handleChangeLang = (value: string) => {
    localStorage.setItem('lang', value as string)
    dispatch(changeLang(value))
    i18next.changeLanguage(value)
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
        <FontAwesomeIcon icon={faAngleDown} />
        <span className="hover:underline text-sm underline-offset-4 font-semibold pointer-events-none">
          {t(selectedLang?.label ?? '')}
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
              {t(item.label)}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectLanguages
