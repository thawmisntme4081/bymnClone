import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { AppDispatch, State } from '../../app/store'

export const useAppDispatch: () => AppDispatch = useDispatch

export const useThunkDispatch = useDispatch<
  ThunkDispatch<State, any, AnyAction>
>
