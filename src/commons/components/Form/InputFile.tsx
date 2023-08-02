import { faCloudArrowUp, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, forwardRef } from 'react'
import FlexCenter from '../FlexCenter'
import { InputFileProps } from './interfaces'

const InputFile: FC<InputFileProps> = forwardRef<
  HTMLInputElement,
  InputFileProps
>(({ error, filename, onRemoveFile, ...rest }, ref) => {
  return (
    <>
      {filename ? (
        <div className="flex items-center justify-between">
          <span>{filename}</span>
          <FontAwesomeIcon
            icon={faXmark}
            className="cursor-pointer"
            onClick={onRemoveFile}
          />
        </div>
      ) : (
        <FlexCenter className="w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <FlexCenter className="flex-col pt-5 pb-6">
              <FontAwesomeIcon
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                icon={faCloudArrowUp}
              />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG or JPG (Max 1MB)
              </p>
            </FlexCenter>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              ref={ref}
              {...rest}
            />
            {!error ? null : <small className="text-red-500">{error}</small>}
          </label>
        </FlexCenter>
      )}
    </>
  )
})

export default InputFile
