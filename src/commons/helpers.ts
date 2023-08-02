import { DEFAULT_LANGUAGE, localStorageKeys } from './constants'

export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

export const getLanguage = () =>
  localStorage.getItem(localStorageKeys.KEY_LANGUAGE) || DEFAULT_LANGUAGE
