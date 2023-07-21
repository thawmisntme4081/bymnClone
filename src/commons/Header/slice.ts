import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LANGUAGES } from './constants'

interface IHeaderState {
  isOpenDropdownLang: boolean
  lang: string
}

const initialState: IHeaderState = {
  isOpenDropdownLang: false,
  lang: LANGUAGES[0].value
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    handleDropdownLang: (state, action: PayloadAction<boolean>) => { state.isOpenDropdownLang = action.payload },
    changeLang: (state, action: PayloadAction<string>) => { state.lang = action.payload }
  }
})

export const { handleDropdownLang, changeLang } = headerSlice.actions

export default headerSlice.reducer
