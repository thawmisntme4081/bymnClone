import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import header from '../commons/Header/slice';

export const store: ToolkitStore = configureStore({ reducer: { header } })

export type State = ReturnType<typeof store.getState>

export default store
