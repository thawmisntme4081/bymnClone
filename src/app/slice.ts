import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_LANGUAGE } from '../commons/constants'
import { IOption } from '../commons/interfaces'
import { TableData } from '../pages/Admin/Layouts/Partners/utils/interfaces'
import { State } from './store'
import { getPartnersMainAndPlatinum, getTypePartners } from './thunk'

export interface ICommonState {
  lang: string
  partnersMain: TableData[]
  partnersPlatinum: TableData[]
  typePartners: IOption[]
  loading: {
    partners: boolean
    typePartners: boolean
  }
}

const initialState: ICommonState = {
  lang: DEFAULT_LANGUAGE,
  partnersMain: [],
  partnersPlatinum: [],
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
    builder.addCase(getPartnersMainAndPlatinum.pending, (state) => {
      state.loading.partners = true
    })
    builder.addCase(getPartnersMainAndPlatinum.fulfilled, (state, action) => {
      state.loading.partners = false
      state.partnersMain = action.payload.main
      state.partnersPlatinum = action.payload.platinum
    })
    builder.addCase(getPartnersMainAndPlatinum.rejected, (state) => {
      state.loading.partners = false
      state.partnersMain = []
      state.partnersPlatinum = []
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
export const selectPartnersMain = (state: State) =>
  state[slice.name].partnersMain
export const selectPartnersPlatinum = (state: State) =>
  state[slice.name].partnersPlatinum
export const selectTypePartners = (state: State) =>
  state[slice.name].typePartners
export const selectLoadingTypePartners = (state: State) =>
  state[slice.name].loading.typePartners
