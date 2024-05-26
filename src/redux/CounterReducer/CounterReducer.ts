import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const initialState = {
  currentValue: 0,
  startValue: 0,
  maxValue: 5,
}

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCurrentValue(state) {
      state.currentValue += 1
    },
    resetCurrentValue(state) {
      state.currentValue = state.startValue
    },
    setStartValue(state, action: PayloadAction<{ startValue: number }>) {
      state.currentValue = action.payload.startValue
      state.startValue = action.payload.startValue
    },
    setMaxValue(state, action: PayloadAction<{ maxValue: number }>) {
      state.maxValue = action.payload.maxValue
    },
  },
})

export const counterReducer = slice.reducer
export const {
  incrementCurrentValue,
  resetCurrentValue,
  setStartValue,
  setMaxValue,
} = slice.actions
