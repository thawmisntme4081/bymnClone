import { Maybe } from 'yup'

export enum PartnerType {
  MAIN = 'main',
  PLATINUM = 'platinum',
  GOLD = 'gold',
  OFFICIAL = 'official',
  REGIONAL = 'regional',
}

export interface TableData {
  _id: string
  name: string
  logo: string
  primaryLogo: string
  type: PartnerType
  link?: string
}

export interface IAddPartnerProps {
  title: string
  editMode: boolean
}
export interface IPartners {
  name: string
  type: string
  logo: string
  primaryLogo: string
  link: Maybe<string | null | undefined>
}
