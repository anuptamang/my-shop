import { GenericObject, Nullable } from '../types'

export const updateStorage = (storageKey: string, value: string) => {
  window.localStorage && window.localStorage.setItem(storageKey, value)
}

export const removeStorage = (storageKey: string) => {
  window.localStorage && window.localStorage.removeItem((storageKey))
}

export const getFromStorage = <T>(storageKey: string): Nullable<T | GenericObject> => {
  let item = null
  try {
    item = window.localStorage ? JSON.parse(window.localStorage.getItem(storageKey) || '') : null
    return item
  } catch {
    return item
  }
}
