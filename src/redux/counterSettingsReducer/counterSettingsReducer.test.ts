import {
  counterSettingsReducer,
  initialState,
  setCounterSettingsStateAC,
  setInputMaxValueAC,
  setInputStartValueAC,
} from "./counterSettingsReducer"

test("state should be set", () => {
  const newState = counterSettingsReducer(
    initialState,
    setCounterSettingsStateAC({
      state: {
        inputStartValue: 6,
        inputMaxValue: 8,
      },
    })
  )

  expect(newState.inputStartValue).toBe(6)
  expect(newState.inputMaxValue).toBe(8)
})
test("input start value should be changed", () => {
  const value = 3
  const newState = counterSettingsReducer(
    initialState,
    setInputStartValueAC({ inputStartValue: value })
  )

  expect(newState).not.toBe(initialState)
  expect(newState.inputStartValue).toBe(value)
})
test("input max value should be changed", () => {
  const value = 6
  const newState = counterSettingsReducer(
    initialState,
    setInputMaxValueAC({ inputMaxValue: value })
  )

  expect(newState).not.toBe(initialState)
  expect(newState.inputMaxValue).toBe(value)
})
