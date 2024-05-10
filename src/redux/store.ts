import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { CounterReducerActionType, counterReducer } from "./counterReducer/counterReducer"
import { localStorageAPI } from "../localStorageAPI/localStorageAPI"
import { ThunkDispatch, thunk } from "redux-thunk"
import { TypedUseSelectorHook } from "react-redux"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = legacy_createStore(rootReducer, undefined, applyMiddleware(thunk))

store.subscribe(() => {
  localStorageAPI.save(store.getState())
})

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () =>
  useDispatch<ThunkDispatch<AppRootStateType, unknown, AnyAction>>()

// types
export type AppRootStateType = ReturnType<typeof store.getState>
export type RootActionType = CounterReducerActionType
