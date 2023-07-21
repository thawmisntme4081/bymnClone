import { FC, MouseEvent } from 'react'

interface IButtonProps {
  title: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  isPrimary?: boolean
  className?: string
}

const Button: FC<IButtonProps> = ({ title, isPrimary, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 ${
        isPrimary
          ? 'bg-[#7F56D9] text-white rounded-lg shadow-sm'
          : 'text-gray-500'
      } ${className}`}
    >
      {title}
    </button>
  )
}

export default Button
