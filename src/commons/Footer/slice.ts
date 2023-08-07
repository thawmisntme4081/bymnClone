import { createSlice } from '@reduxjs/toolkit'
import { State, addReducer } from '../../app/store'
import { TableData } from '../../pages/Admin/Layouts/Partners/utils/interfaces'
import { getPartners } from '../../pages/Admin/Layouts/Partners/utils/thunk'

export interface IFooterState {
  partnersPrimary: TableData[]
  partnersNonPrimary: TableData[]
  loadingPartners: boolean
}

const initialState: IFooterState = {
  partnersPrimary: [],
  partnersNonPrimary: [],
  loadingPartners: false,
}

export const slice = createSlice({
  name: 'footer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPartners.pending, (state) => {
      state.loadingPartners = true
    })
    builder.addCase(getPartners.fulfilled, (state, action) => {
      state.loadingPartners = false
      const data = action.payload.data
      state.partnersNonPrimary = data.filter(
        (item: TableData) => item.isPrimary === false,
      )
      state.partnersPrimary = data.filter((item: TableData) => item.isPrimary)
    })
    builder.addCase(getPartners.rejected, (state) => {
      state.loadingPartners = false
      state.partnersPrimary = []
      state.partnersNonPrimary = []
    })
  },
})

export const selectPartnersPrimary = (state: State) =>
  state[slice.name].partnersPrimary
export const selectPartnersNonPrimary = (state: State) =>
  state[slice.name].partnersNonPrimary

addReducer(slice.name, slice.reducer)
