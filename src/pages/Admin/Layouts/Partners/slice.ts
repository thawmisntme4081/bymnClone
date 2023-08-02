import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addReducer, State } from '../../../../app/store'
import { addPartner, getPartners } from './thunk'

interface IAdminPartnersState {
  filename: string
  isOpenAddPartner: boolean
  partners: any
  loading: {
    getPartners: boolean
    addPartner: boolean
  }
}

const initialState: IAdminPartnersState = {
  filename: '',
  isOpenAddPartner: false,
  partners: [],
  loading: {
    getPartners: false,
    addPartner: false,
  },
}

export const slice = createSlice({
  name: 'adminPartners',
  initialState,
  reducers: {
    changeFilename: (state, action: PayloadAction<string>) => {
      state.filename = action.payload
    },
    removeFilename: (state) => {
      state.filename = ''
    },
    openAddPartner: (state) => {
      state.isOpenAddPartner = true
    },
    closeAddPartner: (state) => {
      state.isOpenAddPartner = false
    },
  },
  extraReducers(builder) {
    builder.addCase(getPartners.pending, (state) => {
      state.loading.getPartners = true
    })
    builder.addCase(getPartners.fulfilled, (state, action) => {
      state.loading.getPartners = false
      state.partners = action.payload.data
    })
    builder.addCase(getPartners.rejected, (state) => {
      state.loading.getPartners = false
    })
    builder.addCase(addPartner.pending, (state) => {
      state.loading.addPartner = true
    })
    builder.addCase(addPartner.fulfilled, (state) => {
      state.loading.addPartner = false
    })
    builder.addCase(addPartner.rejected, (state) => {
      state.loading.addPartner = false
    })
  },
})

export const selectFilename = (state: State) => state[slice.name].filename
export const selectAddPartner = (state: State) =>
  state[slice.name].isOpenAddPartner
export const selectPartners = (state: State) => state[slice.name].partners

export const {
  changeFilename,
  removeFilename,
  openAddPartner,
  closeAddPartner,
} = slice.actions

addReducer(slice.name, slice.reducer)
