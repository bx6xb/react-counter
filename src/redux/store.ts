import { combineReducers, legacy_createStore } from "redux"
import { counterReducer } from "./counterReducer/counterReducer"

const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = legacy_createStore(rootReducer)

export type RootStateType = ReturnType<typeof store.getState>
