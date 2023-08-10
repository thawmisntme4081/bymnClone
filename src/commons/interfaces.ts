import { FC } from 'react'

export interface ILogo {
  logo: string
  alt: string
  link?: string
}

export interface User {
  role: 'admin' | 'user'
}

export interface RouteConfig {
  path: string
  title?: string
  component?: FC
  private?: boolean
  roles?: Array<'admin' | 'user'>
  children?: RouteConfig[]
}

export interface IReducer {
  name: string
  reducer: string
}

export interface ILang {
  label: string
  value: string
}

export interface IObject {
  [key: string]: any
}

export interface IOption {
  _id: string
  value: string
  label: string
}
