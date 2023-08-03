import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { slice } from '../commons/Header/utils/slice'

let combinedReducers = { [slice.name]: slice.reducer }

export const addReducer = (name: string, reducer: Reducer<any, any>) => {
  combinedReducers = { ...combinedReducers, [name]: reducer }
  store.replaceReducer(combineReducers(combinedReducers))
}

export const store: ToolkitStore = configureStore({
  reducer: combineReducers(combinedReducers),
})

export interface State extends ReturnType<typeof store.getState> {}
export interface AppDispatch
  extends ThunkDispatch<
    ReturnType<typeof store.getState>,
    undefined,
    AnyAction
  > {}

export const appDispatch: AppDispatch = store.dispatch

export default store
