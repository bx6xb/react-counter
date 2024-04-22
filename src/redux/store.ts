import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { CounterReducerActionType, counterReducer } from "./counterReducer/counterReducer"
import { localStorageAPI } from "../localStorageAPI/localStorageAPI"
import { thunk } from "redux-thunk"

const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = legacy_createStore(rootReducer, undefined, applyMiddleware(thunk))

store.subscribe(() => {
  localStorageAPI.save(store.getState())
})

export type AppRootStateType = ReturnType<typeof store.getState>

export type RootActionType = CounterReducerActionType
