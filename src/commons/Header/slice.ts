import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { State } from '../../app/store'
import { LANGUAGES } from './constants'

interface IHeaderState {
  lang: string
}

const initialState: IHeaderState = {
  lang: LANGUAGES[0].value
}

export const slice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<string>) => { state.lang = action.payload }
  }
})

export const { changeLang } = slice.actions
export const selectLang = ((state: State) => state[slice.name].lang)
export default slice.reducer
