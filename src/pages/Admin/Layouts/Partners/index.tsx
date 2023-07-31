import { FC } from 'react'
import BasicTable from '../../../../commons/components/Table'
import { columns } from './constants'
import { TableData } from './interfaces'

interface IAdminPartners {}

const data: TableData[] = [
  {
    _id: 1,
    partnerName: 'Adidas',
    logo: 'https://w7.pngwing.com/pngs/488/478/png-transparent-adidas-originals-t-shirt-logo-brand-adidas-angle-text-retail-thumbnail.png',
    primary: true,
  },
  {
    _id: 2,
    partnerName: 'Telekom',
    logo: 'https://w7.pngwing.com/pngs/488/478/png-transparent-adidas-originals-t-shirt-logo-brand-adidas-angle-text-retail-thumbnail.png',
    primary: false,
  },
]

const Partners: FC<IAdminPartners> = () => {
  return <BasicTable data={data} columns={columns} />
}

export default Partners
