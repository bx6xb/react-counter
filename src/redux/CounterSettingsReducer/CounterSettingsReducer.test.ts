import {
  CounterSettingsReducer,
  changeInputMaxValueAC,
  changeInputStartValueAC,
  initialState,
} from "./CounterSettingsReducer"

test("input start value should be changed", () => {
  const value = 3
  const newState = CounterSettingsReducer(initialState, changeInputStartValueAC(value))

  expect(newState).not.toBe(initialState)
  expect(newState).not.toEqual(initialState)
  expect(newState.inputStartValue).toBe(value)
  expect(newState.inputMaxValue).toBe(initialState.inputMaxValue)
})

test("input max value should be changed", () => {
  const value = 12
  const newState = CounterSettingsReducer(initialState, changeInputMaxValueAC(value))

  expect(newState).not.toBe(initialState)
  expect(newState).not.toEqual(initialState)
  expect(newState.inputStartValue).toBe(initialState.inputStartValue)
  expect(newState.inputMaxValue).toBe(value)
})
