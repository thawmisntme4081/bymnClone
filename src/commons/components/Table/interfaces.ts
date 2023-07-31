export interface TableColumn<T> {
  header: string
  accessorKey: keyof T
}

export interface SortingState {
  id: string
  desc: boolean
}
