import { ILang } from './interfaces'

export const localStorageKeys = {
  KEY_LANGUAGE: 'lang',
}

export const LANGUAGES: ILang[] = [
  { label: 'language.ENGLISH', value: 'en' },
  { label: 'language.FRENCH', value: 'fr' },
]

export const DEFAULT_LANGUAGE: string = LANGUAGES[0].value
