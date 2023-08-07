import { ILang } from './interfaces'

export const localStorageKeys = {
  KEY_LANGUAGE: 'lang',
}

export const LANGUAGES: ILang[] = [
  { label: 'language.ENGLISH', value: 'en' },
  { label: 'language.FRENCH', value: 'fr' },
]

export const DEFAULT_LANGUAGE: string = LANGUAGES[0].value

export const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}
