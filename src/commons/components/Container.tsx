import { FC, ReactNode } from 'react'

interface IContainerProps {
  children: ReactNode
  className?: string
}

const Container: FC<IContainerProps> = ({ children, className }) => {
  return (
    <div className={`max-w-7xl w-full mx-auto ${className}`}>{children}</div>
  )
}

export default Container
