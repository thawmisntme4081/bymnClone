import { faCloudArrowUp, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { InputFileProps } from './interfaces'

const InputFile: FC<InputFileProps> = forwardRef<
  HTMLInputElement,
  InputFileProps
>(({ error, onRemoveFile, image, ...rest }, ref) => {
  const { t } = useTranslation('admin')
  return (
    <>
      {image ? (
        <div className="relative flex-1">
          <figure className="flex-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500">
            <img className="max-h-36" src={image} alt="" loading="lazy" />
          </figure>
          <FontAwesomeIcon
            icon={faXmark}
            className="cursor-pointer absolute top-3 right-3 dark:hover:bg-gray-600 hover:bg-gray-100 px-3.5 py-3 rounded-full"
            onClick={onRemoveFile}
          />
        </div>
      ) : (
        <div className="flex-center w-full flex-1">
          <label
            htmlFor="dropzone-file"
            className="flex-col-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex-col-center pt-5 pb-6">
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
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              ref={ref}
              {...rest}
            />
            {!error ? null : <small className="text-red-500">{t(error)}</small>}
          </label>
        </div>
      )}
    </>
  )
})

export default InputFile
