import { FC } from 'react'

interface TableFootProps {}

const TableFoot: FC<TableFootProps> = () => {
  return (
    <tfoot>
      {/* <button onClick={() => table.setPageIndex(0)}>First page</button>
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
      </button> */}
    </tfoot>
  )
}

export default TableFoot
