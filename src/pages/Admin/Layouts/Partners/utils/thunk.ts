import { createAsyncThunk } from '@reduxjs/toolkit'
import { publicAxios } from '../../../../../app/axios'
import { IPartners } from './interfaces'

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
  IPartners,
  { rejectValue: unknown }
>('admin/addPartner', async (params, { rejectWithValue }) => {
  try {
    const response = await publicAxios.post('partners', params)
    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const updatePartner = createAsyncThunk<
  any,
  { id: string; params: IPartners },
  { rejectValue: unknown }
>('admin/updatePartner', async ({ id, params }, { rejectWithValue }) => {
  try {
    const response = await publicAxios.put(`partners/${id}`, params)
    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const deletePartner = createAsyncThunk<
  any,
  string,
  { rejectValue: unknown }
>('admin/deletePartner', async (id, { rejectWithValue }) => {
  try {
    const response = await publicAxios.delete(`partners/${id}`)
    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})
