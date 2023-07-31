import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { State } from '../../../../app/store'

interface IAdminPartnersState {
  filename: string
}

const initialState: IAdminPartnersState = {
  filename: ''
}

export const slice = createSlice({
  name: 'adminPartners',
  initialState,
  reducers: {
    changeFilename: (state, action: PayloadAction<string>) => { state.filename = action.payload },
    removeFilename: (state) => { state.filename = '' }
  }
})

export const { changeFilename, removeFilename } = slice.actions
export const selectFilename = ((state: State) => state[slice.name].filename)
export default slice.reducer
