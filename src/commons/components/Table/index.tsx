import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { SortingState, TableColumn } from './interfaces'

interface BasicTableProps<T> {
  data: T[]
  columns: TableColumn<T>[]
  sorting?: SortingState[]
  setSorting?: Dispatch<SetStateAction<SortingState[]>>
}

const BasicTable: FC<BasicTableProps<any>> = ({
  data,
  columns,
  sorting,
  setSorting,
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
      <div className="pb-4">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
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
                    {cell.column.id === 'logo' ? (
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
