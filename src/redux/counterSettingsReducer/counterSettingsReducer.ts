import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const initialState = {
  inputStartValue: 0,
  inputMaxValue: 5,
}

export const slice = createSlice({
  name: "counterSettings",
  initialState,
  reducers: {
    setInputStartValue(
      state,
      action: PayloadAction<{ inputStartValue: number }>
    ) {
      state.inputStartValue = action.payload.inputStartValue
    },
    setInputMaxValue(state, action: PayloadAction<{ inputMaxValue: number }>) {
      state.inputMaxValue = action.payload.inputMaxValue
    },
  },
})

export const counterSettingsReducer = slice.reducer
export const { setInputStartValue, setInputMaxValue } = slice.actions
