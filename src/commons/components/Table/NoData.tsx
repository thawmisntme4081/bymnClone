import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NoDataProps {
  colSpan: number
}

const NoData: FC<NoDataProps> = ({ colSpan }) => {
  const { t } = useTranslation()
  return (
    <tr>
      <td
        className="p-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
        colSpan={colSpan}
      >
        {t('NO_DATA')}
      </td>
    </tr>
  )
}

export default NoData
