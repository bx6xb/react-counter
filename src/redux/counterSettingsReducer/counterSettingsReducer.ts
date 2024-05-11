import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const initialState = {
  inputStartValue: 0,
  inputMaxValue: 5,
}

export const slice = createSlice({
  name: "counterSettings",
  initialState,
  reducers: {
    setCounterSettingsStateAC(
      state,
      action: PayloadAction<{ state: CounterSettingsReducerState }>
    ) {
      return action.payload.state
    },
    setInputStartValueAC(state, action: PayloadAction<{ inputStartValue: number }>) {
      state.inputStartValue = action.payload.inputStartValue
    },
    setInputMaxValueAC(state, action: PayloadAction<{ inputMaxValue: number }>) {
      state.inputMaxValue = action.payload.inputMaxValue
    },
  },
})

export const counterSettingsReducer = slice.reducer
export const { setInputStartValueAC, setInputMaxValueAC, setCounterSettingsStateAC } = slice.actions

// types
export type CounterSettingsReducerState = typeof initialState
export type CounterSettingsReducerAction =
  | ReturnType<typeof setInputStartValueAC>
  | ReturnType<typeof setInputMaxValueAC>
  | ReturnType<typeof setCounterSettingsStateAC>
