import { FC, forwardRef } from 'react'
import { InputProps } from './interfaces'

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...rest }, ref) => {
    return (
      <div className="mb-3 pt-0">
        <input
          ref={ref}
          className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          {...rest}
        />
        {!error ? null : <small className="text-red-500">{error}</small>}
      </div>
    )
  },
)

export default Input
