import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import TableBody from './TableBody'
import TableHead from './TableHead'
import { TableProps } from './interfaces'

const Table = <T extends object>({
  data,
  columns,
  onOpenPopup,
  buttonAddTitle,
  haveAction,
  renderCell,
}: TableProps<T>) => {
  const [filtering, setFiltering] = useState('')
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  const { t } = useTranslation('admin')

  return (
    <div className="relative overflow-x-auto">
      <div className="pb-4 flex-between">
        <div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-500 dark:text-gray-400"
              />
            </div>
            <input
              type="text"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={filtering}
              onChange={(e) => setFiltering(e.target.value)}
              placeholder="Search for partners"
            />
          </div>
        </div>
        {onOpenPopup && buttonAddTitle && (
          <button
            className="block text-gray-500 dark:text-gray-400 bg-gray-600 hover:bg-gray-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
            onClick={onOpenPopup}
          >
            {t(buttonAddTitle)}
          </button>
        )}
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-hidden shadow-md sm:rounded-lg">
        <TableHead
          headerGroups={table.getHeaderGroups()}
          haveAction={haveAction}
        />
        <TableBody
          rows={table.getRowModel().rows}
          haveAction={haveAction}
          renderCell={renderCell}
        />
      </table>
    </div>
  )
}

export default Table
