import {
  incrementCurrentValueAC,
  counterReducer,
  initialState,
  resetCurrentValueAC,
  setStartValueAC,
  setMaxValueAC,
  setMessageTextAC,
  setInputStartValueAC,
  setInputMaxValueAC,
  setErrorAC,
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
  const newState = counterReducer(initialState, setStartValueAC(value))

  expect(newState).not.toBe(initialState)
  expect(newState.currentValue).toBe(value)
  expect(newState.startValue).toBe(value)
})

test("max value should be changed", () => {
  const value = 12
  const newState = counterReducer(initialState, setMaxValueAC(value))

  expect(newState).not.toBe(initialState)
  expect(newState.maxValue).toBe(value)
})

test("input start value should be changed", () => {
  const value = 3
  const newState = counterReducer(initialState, setInputStartValueAC(value))

  expect(newState).not.toBe(initialState)
  expect(newState.inputStartValue).toBe(value)
})

test("input max value should be changed", () => {
  const value = 6
  const newState = counterReducer(initialState, setInputMaxValueAC(value))

  expect(newState).not.toBe(initialState)
  expect(newState.inputMaxValue).toBe(value)
})

test("message text should be changed", () => {
  const value = "some message text"
  const newState = counterReducer(initialState, setMessageTextAC(value))

  expect(newState).not.toBe(initialState)
  expect(newState.messageText).toBe(value)
})

test("isError value should be changed", () => {
  const value = true
  const newState = counterReducer(initialState, setErrorAC(value))

  expect(newState).not.toBe(initialState)
  expect(newState.isError).toBe(value)
})
