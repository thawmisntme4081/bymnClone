import { Row } from '@tanstack/react-table'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import NoData from './NoData'

interface TableBodyProps<T> {
  rows: Row<T>[]
  haveAction?: boolean
  renderCell: any
  onDelete: (id: string) => void
  onUpdate: (id: string) => void
  colSpan: number
}

const TableBody: FC<TableBodyProps<any>> = ({
  rows,
  haveAction,
  renderCell,
  onDelete,
  onUpdate,
  colSpan,
}) => {
  const { t } = useTranslation('commons')
  return (
    <tbody>
      {!!rows.length ? (
        rows.map((row) => (
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
                  onClick={() => onUpdate(row.original._id)}
                >
                  {t('EDIT')}
                </button>
                <button
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  onClick={() => onDelete(row.original._id)}
                >
                  {t('DELETE')}
                </button>
              </td>
            )}
          </tr>
        ))
      ) : (
        <NoData colSpan={colSpan} />
      )}
    </tbody>
  )
}

export default TableBody
