import { AnyAction, combineReducers } from "redux"
import { CounterReducerAction, counterReducer } from "./counterReducer/counterReducer"
import { localStorageAPI } from "../localStorageAPI/localStorageAPI"
import { ThunkDispatch, thunk } from "redux-thunk"
import { TypedUseSelectorHook } from "react-redux"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import {
  CounterSettingsReducerAction,
  counterSettingsReducer,
} from "./counterSettingsReducer/counterSettingsReducer"

const rootReducer = combineReducers({
  counter: counterReducer,
  counterSettings: counterSettingsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
})

store.subscribe(() => {
  localStorageAPI.save(store.getState())
})

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootState, unknown, AnyAction>>()

// types
export type AppRootState = ReturnType<typeof store.getState>
export type RootAction = CounterReducerAction | CounterSettingsReducerAction

// @ts-ignore
window.store = store
