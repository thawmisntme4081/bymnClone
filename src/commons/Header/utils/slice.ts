import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addReducer, State } from '../../../app/store'
import { DEFAULT_LANGUAGE } from '../../constants'

interface IHeaderState {
  lang: string
}

const initialState: IHeaderState = {
  lang: DEFAULT_LANGUAGE,
}

export const slice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload
    },
  },
})

export const { changeLang } = slice.actions
export const selectLang = (state: State) => state[slice.name].lang

addReducer(slice.name, slice.reducer)
