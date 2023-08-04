import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addReducer, State } from '../../../../../app/store'
import { IObject } from '../../../../../commons/interfaces'
import { TableData } from './interfaces'
import { addPartner, deletePartner, getPartners } from './thunk'

export interface IAdminPartnersState {
  file: {
    filename: string
    image: string
  }
  openPopup: {
    isOpenAddPartner: boolean
    openConfirm: boolean
  }
  partners: any
  partnerById: IObject
  loading: {
    getPartners: boolean
    addPartner: boolean
  }
  partnerId: string
  editMode: boolean
}

const initialState: IAdminPartnersState = {
  file: {
    filename: '',
    image: '',
  },
  openPopup: {
    isOpenAddPartner: false,
    openConfirm: false,
  },
  partners: [],
  partnerById: {},
  loading: {
    getPartners: false,
    addPartner: false,
  },
  partnerId: '',
  editMode: false,
}

export const slice = createSlice({
  name: 'adminPartners',
  initialState,
  reducers: {
    changeFilename: (state, action: PayloadAction<string>) => {
      state.file.filename = action.payload
    },
    changeImage: (state, action: PayloadAction<string>) => {
      state.file.image = action.payload
    },
    removeFile: (state) => {
      state.file.filename = ''
      state.file.image = ''
    },
    openAddPartner: (state) => {
      state.openPopup.isOpenAddPartner = true
    },
    openUpdatePartner: (state, action) => {
      state.openPopup.isOpenAddPartner = true
      state.partnerById = state.partners.find(
        (partner: TableData) => partner._id === action.payload,
      )
      state.partnerId = action.payload
      state.editMode = true
    },
    closeAddPartner: (state) => {
      state.openPopup.isOpenAddPartner = false
      state.file.filename = ''
      state.file.image = ''
      state.partnerById = {}
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
      state.partners = action.payload.data
    })
    builder.addCase(getPartners.rejected, (state) => {
      state.loading.getPartners = false
      state.partners = []
    })
    builder.addCase(addPartner.pending, (state) => {
      state.loading.addPartner = true
    })
    builder.addCase(addPartner.fulfilled, (state) => {
      state.loading.addPartner = false
      state.file.filename = ''
      state.openPopup.isOpenAddPartner = false
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

export const selectFile = (state: State) => state[slice.name].file
export const selectAddPartner = (state: State) =>
  state[slice.name].openPopup.isOpenAddPartner
export const selectPartners = (state: State) => state[slice.name].partners
export const selectPartnerId = (state: State) => state[slice.name].partnerId
export const selectPartnerById = (state: State) => state[slice.name].partnerById
export const selectEditMode = (state: State) => state[slice.name].editMode
export const selectPopupConfirm = (state: State) =>
  state[slice.name].openPopup.openConfirm

export const {
  changeFilename,
  changeImage,
  removeFile,
  openAddPartner,
  openUpdatePartner,
  closeAddPartner,
  clickDeletePartner,
  closeConfirmPopup,
} = slice.actions

addReducer(slice.name, slice.reducer)
