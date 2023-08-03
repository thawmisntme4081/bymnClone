import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, MouseEvent, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface PopupProps {
  title?: string
  onClose: (e: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
  size?: 'default' | 'small' | 'large'
}

const Popup: FC<PopupProps> = ({
  title,
  onClose,
  size = 'default',
  children,
}) => {
  const { t } = useTranslation('admin')
  return (
    <>
      <div className="flex-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div
          className={`relative w-full ${
            size === 'small' ? 'max-w-md' : 'max-w-2xl'
          }  max-h-full`}
        >
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div
              className={`flex-between p-4 rounded-t dark:border-gray-600 ${
                title ? 'border-b' : ''
              }`}
            >
              {title && (
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t(title)}
                </h3>
              )}
              <button
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <FontAwesomeIcon size="2x" icon={faXmark} />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Popup
