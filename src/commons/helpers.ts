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

export const promiseWrapper = (promise: Promise<any>) => {
  let status = 'pending'
  let result: any

  const s = promise.then(
    (value) => {
      status = 'success'
      result = value
    },
    (error) => {
      status = 'error'
      result = error
    },
  )

  return () => {
    switch (status) {
      case 'pending':
        throw s
      case 'success':
        return result
      case 'error':
        throw result
      default:
        throw new Error('Unknown status')
    }
  }
}
