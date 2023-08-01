import { TypedUseSelectorHook, useSelector } from "react-redux";
import { State } from "../../app/store";

export const useAppSelector: TypedUseSelectorHook<State> = useSelector
