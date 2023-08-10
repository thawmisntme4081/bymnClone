import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, MouseEvent } from 'react'
import { IObject } from '../../interfaces'

interface PrevButtonProps {
  className?: string
  style?: IObject
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const PrevButton: FC<PrevButtonProps> = ({ className, style, onClick }) => {
  return (
    <button
      className={`!left-0 !w-8 !h-10 z-10 !bg-white rounded-e ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3 text-black" />
    </button>
  )
}

export default PrevButton
