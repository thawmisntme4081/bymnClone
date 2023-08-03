import { Row } from '@tanstack/react-table'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface TableBodyProps<T> {
  rows: Row<T>[]
  haveAction?: boolean
  renderCell: any
}

const TableBody: FC<TableBodyProps<any>> = ({
  rows,
  haveAction,
  renderCell,
}) => {
  const { t } = useTranslation('commons')
  return (
    <tbody>
      {rows.map((row) => (
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          key={row.id}
        >
          {row.getVisibleCells().map((cell) => (
            <td className="p-4" key={cell.id}>
              {renderCell(cell, row.original.link)}
            </td>
          ))}
          {haveAction && (
            <td className="p-4 space-x-3">
              <button
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                onClick={() => {}}
              >
                {t('EDIT')}
              </button>
              <button
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                onClick={() => {}}
              >
                {t('DELETE')}
              </button>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
