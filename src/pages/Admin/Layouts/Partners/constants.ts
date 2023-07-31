import { TableColumn } from "../../../../commons/components/Table/interfaces";
import { TableData } from "./interfaces";

export const columns: TableColumn<TableData>[] = [
  {
    header: 'Partner name',
    accessorKey: 'partnerName',
  },
  {
    header: 'Logo',
    accessorKey: 'logo',
  },
  {
    header: 'Primary',
    accessorKey: 'primary',
  },
]

export const ONE_MB = 1024 * 1024
export const allowedExtensions = ['.svg', '.jpg', '.jpeg', '.png']
