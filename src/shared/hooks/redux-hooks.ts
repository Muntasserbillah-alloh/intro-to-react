import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../configure-store";


export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();