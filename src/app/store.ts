import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import header from '../commons/Header/slice';
import adminPartners from '../pages/Admin/Layouts/Partners/slice';

export const store: ToolkitStore = configureStore({ reducer: { header, adminPartners } })

export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store
