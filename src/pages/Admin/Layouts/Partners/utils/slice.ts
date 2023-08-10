import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addReducer, State } from '../../../../../app/store'
import { IObject } from '../../../../../commons/interfaces'
import { TableData } from './interfaces'
import { addPartner, deletePartner, getPartners, updatePartner } from './thunk'

export interface IAdminPartnersState {
  logo: string
  primaryLogo: string
  openPopup: {
    isOpenAddPartner: boolean
    openConfirm: boolean
  }
  partners: any
  partnerById: IObject
  loading: {
    getPartners: boolean
  }
  partnerId: string
  editMode: boolean
}

const initialState: IAdminPartnersState = {
  logo: '',
  primaryLogo: '',
  openPopup: {
    isOpenAddPartner: false,
    openConfirm: false,
  },
  partners: [],
  partnerById: {},
  loading: {
    getPartners: false,
  },
  partnerId: '',
  editMode: false,
}

export const slice = createSlice({
  name: 'adminPartners',
  initialState,
  reducers: {
    changeImage: (
      state,
      action: PayloadAction<{ type: 'logo' | 'primaryLogo'; data: string }>,
    ) => {
      state[action.payload.type] = action.payload.data
    },
    changePrimaryLogo: (state, action: PayloadAction<string>) => {
      state.primaryLogo = action.payload
    },
    removeImage: (state, action: PayloadAction<'logo' | 'primaryLogo'>) => {
      state[action.payload] = ''
    },
    openAddPartner: (state) => {
      state.openPopup.isOpenAddPartner = true
    },
    openUpdatePartner: (state, action: PayloadAction<string>) => {
      state.openPopup.isOpenAddPartner = true
      state.partnerById = state.partners.find(
        (partner: TableData) => partner._id === action.payload,
      )
      state.partnerId = action.payload as string
      state.editMode = true
    },
    closeAddPartner: (state) => {
      state.openPopup.isOpenAddPartner = false
      state.logo = ''
      state.primaryLogo = ''
      state.partnerById = {}
      state.editMode = false
    },
    closeConfirmPopup: (state) => {
      state.openPopup.openConfirm = false
    },
    clickDeletePartner: (state, action: PayloadAction<string>) => {
      state.partnerId = action.payload
      state.openPopup.openConfirm = true
    },
    loadPartners: (state) => {
      state.loading.getPartners = true
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
      state.partners = []
    })
    builder.addCase(addPartner.fulfilled, (state) => {
      state.openPopup.isOpenAddPartner = false
      state.logo = ''
      state.primaryLogo = ''
      state.partnerById = {}
      state.editMode = false
    })
    builder.addCase(updatePartner.fulfilled, (state) => {
      state.openPopup.isOpenAddPartner = false
      state.logo = ''
      state.primaryLogo = ''
      state.partnerById = {}
      state.editMode = false
    })
    builder.addCase(deletePartner.fulfilled, (state) => {
      state.partnerId = ''
      state.openPopup.openConfirm = false
    })
  },
})

export const selectLogo = (state: State) => state[slice.name].logo
export const selectPrimaryLogo = (state: State) => state[slice.name].primaryLogo
export const selectAddPartner = (state: State) =>
  state[slice.name].openPopup.isOpenAddPartner
export const selectPartners = (state: State) => state[slice.name].partners
export const selectLoadingPartners = (state: State) =>
  state[slice.name].loading.getPartners
export const selectPartnerId = (state: State) => state[slice.name].partnerId
export const selectPartnerById = (state: State) => state[slice.name].partnerById
export const selectEditMode = (state: State) => state[slice.name].editMode
export const selectPopupConfirm = (state: State) =>
  state[slice.name].openPopup.openConfirm

export const {
  changeImage,
  removeImage,
  openAddPartner,
  openUpdatePartner,
  closeAddPartner,
  clickDeletePartner,
  closeConfirmPopup,
  loadPartners,
} = slice.actions

addReducer(slice.name, slice.reducer)
