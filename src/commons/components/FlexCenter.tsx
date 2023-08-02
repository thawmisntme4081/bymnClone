import { ReactNode, forwardRef } from 'react'

interface FlexCenterProps {
  children: ReactNode
  elementName?: string
  className?: string
  [key: string]: any
}

const FlexCenter = forwardRef<HTMLDivElement, FlexCenterProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <div ref={ref} className={`flex items-center justify-center ${className}`}  {...others}>
        {children}
      </div>
    )
  },
)

export default FlexCenter
