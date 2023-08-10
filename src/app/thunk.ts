import { createAsyncThunk } from '@reduxjs/toolkit'
import { publicAxios } from './axios'

export const getTypePartners = createAsyncThunk<
  any,
  void,
  { rejectValue: unknown }
>('getTypePartners', async (params, { rejectWithValue }) => {
  try {
    const response = await publicAxios.get('typePartners')
    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})
