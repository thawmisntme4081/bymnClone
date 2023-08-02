import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Dispatch, FC, MouseEvent, SetStateAction, useState } from 'react'
import { SortingState, TableColumn } from './interfaces'

interface BasicTableProps<T> {
  data: T[]
  columns: TableColumn<T>[]
  sorting?: SortingState[]
  setSorting?: Dispatch<SetStateAction<SortingState[]>>
  onOpenPopup?: (e: MouseEvent<HTMLButtonElement>) => void
  buttonAddTitle?: string
}

const BasicTable: FC<BasicTableProps<any>> = ({
  data,
  columns,
  sorting,
  setSorting,
  onOpenPopup,
  buttonAddTitle,
}) => {
  const [filtering, setFiltering] = useState('')

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  })

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
            {buttonAddTitle}
          </button>
        )}
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-hidden shadow-md sm:rounded-lg">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  scope="col"
                  className="p-4"
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {/* {
                        { asc: '🔼', desc: '🔽' }[
                          header.column.getIsSorted() ?? null
                        ]
                      } */}
                    </div>
                  )}
                </th>
              ))}
              <th scope="col" className="p-4">
                Action
              </th>
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td className="p-4" key={cell.id}>
                  <>
                    {cell.column.id === 'name' ? (
                      <>
                        {row.original.link ? (
                          <a
                            href={row.original.link}
                            className="hover:text-blue-400"
                          >
                            {cell.renderValue() as string}
                          </a>
                        ) : (
                          <span>{cell.renderValue() as string}</span>
                        )}
                      </>
                    ) : cell.column.id === 'logo' ? (
                      <img
                        src={cell.renderValue() as string}
                        alt=""
                        loading="lazy"
                        width={60}
                      />
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </>
                </td>
              ))}
              <td className="p-4 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          <button onClick={() => table.setPageIndex(0)}>First page</button>
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            Previous page
          </button>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            Next page
          </button>
          <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
            Last page
          </button>
        </tfoot> */}
      </table>
    </div>
  )
}

export default BasicTable
