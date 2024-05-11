import {
  incrementCurrentValueAC,
  counterReducer,
  initialState,
  resetCurrentValueAC,
  setStartValueAC,
  setMaxValueAC,
} from "./counterReducer"

test("current value should be incremented by 1", () => {
  const newState = counterReducer(initialState, incrementCurrentValueAC())

  expect(newState).not.toBe(initialState)
  expect(newState.currentValue).toBe(1)
})
test("current value should be equal start value", () => {
  const newState = counterReducer(
    {
      ...initialState,
      currentValue: 5,
      startValue: 2,
    },
    resetCurrentValueAC()
  )

  expect(newState).not.toBe(initialState)
  expect(newState.currentValue).toBe(newState.startValue)
})
test("start value should be changed", () => {
  const value = 3
  const newState = counterReducer(initialState, setStartValueAC({ startValue: value }))

  expect(newState).not.toBe(initialState)
  expect(newState.currentValue).toBe(value)
  expect(newState.startValue).toBe(value)
})
test("max value should be changed", () => {
  const value = 12
  const newState = counterReducer(initialState, setMaxValueAC({ maxValue: value }))

  expect(newState).not.toBe(initialState)
  expect(newState.maxValue).toBe(value)
})
