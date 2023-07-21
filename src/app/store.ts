import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import headerReducer from '../commons/Header/slice';

export const store: ToolkitStore = configureStore({ reducer: { headerReducer } })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
