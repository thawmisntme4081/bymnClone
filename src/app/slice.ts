import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_LANGUAGE } from '../commons/constants'
import { IOption } from '../commons/interfaces'
import { TableData } from '../pages/Admin/Layouts/Partners/utils/interfaces'
import { getPartners } from '../pages/Admin/Layouts/Partners/utils/thunk'
import { State } from './store'
import { getTypePartners } from './thunk'

export interface ICommonState {
  lang: string
  partnersPrimary: TableData[]
  partnersNonPrimary: TableData[]
  typePartners: IOption[]
  loading: {
    partners: boolean
    typePartners: boolean
  }
}

const initialState: ICommonState = {
  lang: DEFAULT_LANGUAGE,
  partnersPrimary: [],
  partnersNonPrimary: [],
  loading: {
    partners: false,
    typePartners: false,
  },
  typePartners: [],
}

export const slice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(getPartners.pending, (state) => {
      state.loading.partners = true
    })
    builder.addCase(getPartners.fulfilled, (state, action) => {
      state.loading.partners = false
      const data = action.payload.data
      // state.partnersNonPrimary = data.filter(
      //   (item: TableData) => item.isPrimary === false,
      // )
      // state.partnersPrimary = data.filter((item: TableData) => item.isPrimary)
    })
    builder.addCase(getPartners.rejected, (state) => {
      state.loading.partners = false
      state.partnersPrimary = []
      state.partnersNonPrimary = []
    })
    builder.addCase(getTypePartners.pending, (state) => {
      state.loading.partners = true
    })
    builder.addCase(getTypePartners.fulfilled, (state, action) => {
      state.loading.partners = false
      state.typePartners = action.payload.data
    })
  },
})

export const { changeLang } = slice.actions

export const selectLang = (state: State) => state[slice.name].lang
export const selectPartnersPrimary = (state: State) =>
  state[slice.name].partnersPrimary
export const selectPartnersNonPrimary = (state: State) =>
  state[slice.name].partnersNonPrimary
export const selectTypePartners = (state: State) =>
  state[slice.name].typePartners
export const selectLoadingTypePartners = (state: State) =>
  state[slice.name].loading.typePartners
