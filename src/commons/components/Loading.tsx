import { FC } from 'react'

interface LoadingProps {
  type?: string
  className?: string
}

const Loading: FC<LoadingProps> = ({ type, className }) => {
  const renderComponent = () => {
    switch (type) {
      case 'block':
        return (
          <div role="status" className="animate-pulse">
            <div className={`bg-gray-600 rounded ${className}`} />
          </div>
        )
      default:
        return (
          <div className="flex-center absolute inset-0">
            <div className="opacity-50 absolute inset-0 z-30 bg-black" />
            <div
              className="animate-spin absolute z-40 inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
              role="status"
              aria-label="loading"
            />
          </div>
        )
    }
  }
  return renderComponent()
}

export default Loading
