import { combineReducers, legacy_createStore } from "redux"
import { CounterReducer } from "./CounterReducer/CounterReducer"

const rootReducer = combineReducers({
  counter: CounterReducer,
})

export const store = legacy_createStore(rootReducer)

export type StateType = ReturnType<typeof store.getState>

export type DispatchType = typeof store.dispatch
