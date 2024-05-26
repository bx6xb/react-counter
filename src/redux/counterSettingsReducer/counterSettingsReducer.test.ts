import {
  counterSettingsReducer,
  initialState,
  setInputMaxValue,
  setInputStartValue,
} from "./counterSettingsReducer"

test("input start value should be changed", () => {
  const value = 3
  const newState = counterSettingsReducer(
    initialState,
    setInputStartValue({ inputStartValue: value })
  )

  expect(newState).not.toBe(initialState)
  expect(newState.inputStartValue).toBe(value)
})
test("input max value should be changed", () => {
  const value = 6
  const newState = counterSettingsReducer(initialState, setInputMaxValue({ inputMaxValue: value }))

  expect(newState).not.toBe(initialState)
  expect(newState.inputMaxValue).toBe(value)
})
