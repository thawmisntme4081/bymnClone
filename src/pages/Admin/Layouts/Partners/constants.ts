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
