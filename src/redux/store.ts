import { Dispatch, combineReducers } from "redux"
import { counterReducer } from "./counterReducer/counterReducer"
import { thunk } from "redux-thunk"
import { TypedUseSelectorHook } from "react-redux"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { counterSettingsReducer } from "./counterSettingsReducer/counterSettingsReducer"
import { load, save } from "../api/localStorageAPI"

const rootReducer = combineReducers({
  counter: counterReducer,
  counterSettings: counterSettingsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
  preloadedState: load(),
})

store.subscribe(() => {
  save(store.getState())
})

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
export const useAppDispatch = () => useDispatch<Dispatch>()

// types
export type AppRootState = ReturnType<typeof store.getState>
