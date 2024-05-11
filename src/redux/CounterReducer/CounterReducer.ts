import { ThunkAction } from "redux-thunk"
import { AppRootState, RootAction } from "../store"
import { localStorageAPI } from "../../localStorageAPI/localStorageAPI"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { setCounterSettingsStateAC } from "../counterSettingsReducer/counterSettingsReducer"

export const initialState = {
  currentValue: 0,
  startValue: 0,
  maxValue: 5,
}

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounterStateAC(state, action: PayloadAction<{ state: CounterState }>) {
      return action.payload.state
    },
    incrementCurrentValueAC(state) {
      state.currentValue += 1
    },
    resetCurrentValueAC(state) {
      state.currentValue = state.startValue
    },
    setStartValueAC(state, action: PayloadAction<{ startValue: number }>) {
      state.currentValue = action.payload.startValue
      state.startValue = action.payload.startValue
    },
    setMaxValueAC(state, action: PayloadAction<{ maxValue: number }>) {
      state.maxValue = action.payload.maxValue
    },
  },
})

export const counterReducer = slice.reducer
export const {
  setCounterStateAC,
  incrementCurrentValueAC,
  resetCurrentValueAC,
  setStartValueAC,
  setMaxValueAC,
} = slice.actions

// thunks
export const setCounterStateTC =
  (): ThunkAction<void, AppRootState, unknown, RootAction> => (dispatch) => {
    const state = localStorageAPI.load()
    if (state) {
      dispatch(setCounterStateAC({ state: state.counter }))
      dispatch(setCounterSettingsStateAC({ state: state.counterSettings }))
    }
  }

// types
export type CounterState = typeof initialState
export type CounterReducerAction =
  | ReturnType<typeof setCounterStateAC>
  | ReturnType<typeof incrementCurrentValueAC>
  | ReturnType<typeof resetCurrentValueAC>
  | ReturnType<typeof setStartValueAC>
  | ReturnType<typeof setMaxValueAC>
