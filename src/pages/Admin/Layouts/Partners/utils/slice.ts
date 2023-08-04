import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addReducer, State } from '../../../../../app/store'
import { addPartner, deletePartner, getPartners } from './thunk'

export interface IAdminPartnersState {
  filename: string
  openPopup: {
    isOpenAddPartner: boolean
    openConfirm: boolean
  }
  partners: any
  loading: {
    getPartners: boolean
    addPartner: boolean
  }
  partnerId: string
}

const initialState: IAdminPartnersState = {
  filename: '',
  openPopup: {
    isOpenAddPartner: false,
    openConfirm: false,
  },
  partners: [],
  loading: {
    getPartners: false,
    addPartner: false,
  },
  partnerId: '',
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
      state.openPopup.isOpenAddPartner = true
    },
    closeAddPartner: (state) => {
      state.openPopup.isOpenAddPartner = false
    },
    closeConfirmPopup: (state) => {
      state.openPopup.openConfirm = false
    },
    clickDeletePartner: (state, action: PayloadAction<string>) => {
      state.partnerId = action.payload
      state.openPopup.openConfirm = true
    },
  },
  extraReducers(builder) {
    builder.addCase(getPartners.pending, (state) => {
      state.loading.getPartners = true
    })
    builder.addCase(getPartners.fulfilled, (state, action) => {
      state.loading.getPartners = false
      state.partners = action.payload?.data ?? []
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
    builder.addCase(deletePartner.fulfilled, (state) => {
      state.partnerId = ''
      state.openPopup.openConfirm = false
    })
  },
})

export const selectFilename = (state: State) => state[slice.name].filename
export const selectAddPartner = (state: State) =>
  state[slice.name].openPopup.isOpenAddPartner
export const selectPartners = (state: State) => state[slice.name].partners
export const selectPartnerId = (state: State) => state[slice.name].partnerId
export const selectPopupConfirm = (state: State) =>
  state[slice.name].openPopup.openConfirm

export const {
  changeFilename,
  removeFilename,
  openAddPartner,
  closeAddPartner,
  clickDeletePartner,
  closeConfirmPopup,
} = slice.actions

addReducer(slice.name, slice.reducer)
