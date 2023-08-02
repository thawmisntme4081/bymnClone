import { createAsyncThunk } from '@reduxjs/toolkit'
import { publicAxios } from '../../../../app/axios'
import { IFormValues } from './interfaces'

export const getPartners = createAsyncThunk<
  any,
  void,
  { rejectValue: unknown }
>('admin/getPartners', async (params, { rejectWithValue }) => {
  try {
    const response = await publicAxios.get('partners')
    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const addPartner = createAsyncThunk<
  any,
  IFormValues,
  { rejectValue: unknown }
>('admin/addPartner', async (params, { rejectWithValue }) => {
  try {
    const response = await publicAxios.post('partners', params)
    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})
