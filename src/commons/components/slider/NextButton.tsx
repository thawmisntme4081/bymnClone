import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, MouseEvent } from 'react'
import { IObject } from '../../interfaces'

interface NextButtonProps {
  className?: string
  style?: IObject
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const NextButton: FC<NextButtonProps> = ({ className, style, onClick }) => {
  return (
    <button
      className={`!right-0 !w-8 !h-10 z-10 !bg-white rounded-s before:content-none ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-black" />
    </button>
  )
}

export default NextButton
