import { InputHTMLAttributes, MouseEvent } from 'react'

export interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  image?: string
  onRemoveFile: (e: MouseEvent<SVGSVGElement>) => void
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
}
