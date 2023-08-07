import { DEFAULT_LANGUAGE, localStorageKeys } from './constants'
import { IObject } from './interfaces'

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

export const filterObjectByFormField = (object: IObject, fields: string[]) =>
  Object.fromEntries(fields.map((key) => [key, object[key]]))

export const removeUnchangedFields = (
  existedData: IObject,
  newData: IObject,
) => {
  for (const key in newData) {
    if (newData[key] === existedData[key]) {
      delete newData[key]
    }
  }
}
