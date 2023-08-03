import { HeaderGroup, flexRender } from '@tanstack/react-table'
import { FC } from 'react'

interface TableHeadProps<T> {
  headerGroups: HeaderGroup<T>[]
  haveAction?: boolean
}

const TableHead: FC<TableHeadProps<any>> = ({ headerGroups, haveAction }) => {
  return (
    <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th scope="col" className="p-4" key={header.id}>
              {header.isPlaceholder ? null : (
                <div>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </div>
              )}
            </th>
          ))}
          {haveAction && (
            <th scope="col" className="p-4">
              Action
            </th>
          )}
        </tr>
      ))}
    </thead>
  )
}

export default TableHead
