export interface TableData {
  _id: number
  partnerName: string
  logo: string
  primary: boolean
}

export interface IAddPartnerProps {
  title: string
}

export interface IFormValues {
  name: string
  isPrimary: boolean
  file: string
}
