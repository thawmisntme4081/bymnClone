import { Maybe } from "yup"

export interface TableData {
  _id: number
  name: string
  logo: string
  isPrimary: boolean
  link?: string
}

export interface IAddPartnerProps {
  title: string
}

export interface IFormValues {
  name: string;
  isPrimary: NonNullable<boolean | undefined>;
  logo: string;
  link: Maybe<string | null | undefined>;
}
