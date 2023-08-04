import { ColumnDef } from '@tanstack/react-table'
import { MouseEvent } from 'react'

export interface TableColumn<T> {
  header: string
  accessorKey: keyof T
}

export interface SortingState {
  id: string
  desc: boolean
}

// export interface TableProps<T> {
//   data: T[]
//   columns: TableColumn<T>[]
//   sorting?: SortingState[]
//   setSorting?: Dispatch<SetStateAction<SortingState[]>>
// }

export interface TableProps<T extends object> {
  data: T[]
  columns: ColumnDef<T>[]
  onOpenPopup?: (e: MouseEvent<HTMLButtonElement>) => void
  buttonAddTitle?: string
  haveAction?: boolean
  renderCell: any
  onDelete: (id: string) => void
  onUpdate: (id: string) => void
}
