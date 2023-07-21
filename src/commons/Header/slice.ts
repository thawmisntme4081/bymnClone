import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LANGUAGES } from './constants'

interface IHeaderState {
  lang: string
}

const initialState: IHeaderState = {
  lang: LANGUAGES[0].value
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<string>) => { state.lang = action.payload }
  }
})

export const { changeLang } = headerSlice.actions

export default headerSlice.reducer
