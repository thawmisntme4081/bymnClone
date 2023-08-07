import { TableColumn } from '../../../../../commons/components/Table/interfaces'
import { TableData } from './interfaces'

export const columns: TableColumn<TableData>[] = [
  {
    header: 'Partner name',
    accessorKey: 'name',
  },
  {
    header: 'Logo',
    accessorKey: 'logo',
  },
  {
    header: 'isPrimary',
    accessorKey: 'isPrimary',
  },
]

export const ONE_MB = 1024 * 1024
export const allowedExtensions = ['.svg', '.jpg', '.jpeg', '.png']

export const ERRORS = {
  NAME_REQUIRED: 'partners.errors.NAME_REQUIRED',
  LOGO_REQUIRED: 'partners.errors.FILE_REQUIRED',
  INVALID_FILE: 'partners.errors.INVALID_FILE',
  INVALID_FILE_SIZE: 'partners.errors.INVALID_FILE_SIZE',
}
