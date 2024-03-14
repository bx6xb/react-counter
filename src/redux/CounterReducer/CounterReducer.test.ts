import {
  incrementCurrentValueAC,
  CounterReducer,
  initialState,
  resetCurrentValueAC,
  changeStartValueAC,
  changeMaxValueAC,
  changeMessageText,
} from "./CounterReducer"

test("current value should be incremented by 1", () => {
  const newState = CounterReducer(initialState, incrementCurrentValueAC(1))

  expect(newState).not.toBe(initialState)
  expect(newState.currentValue).toBe(1)
  expect(newState.startValue).toBe(0)
  expect(newState.maxValue).toBe(5)
  expect(newState.messageText).toBe("")
})

test("current value should be incremented by 1", () => {
  const transitState = CounterReducer(initialState, incrementCurrentValueAC(3))
  const newState = CounterReducer(transitState, resetCurrentValueAC())

  expect(newState).not.toBe(initialState)
  expect(newState).toEqual(initialState)
  expect(newState.currentValue).toBe(0)
  expect(newState.startValue).toBe(0)
  expect(newState.maxValue).toBe(5)
  expect(newState.messageText).toBe("")
})

test("start value should be changed", () => {
  const value = 3
  const newState = CounterReducer(initialState, changeStartValueAC(value))

  expect(newState).not.toBe(initialState)
  expect(newState).not.toEqual(initialState)
  expect(newState.currentValue).toBe(value)
  expect(newState.startValue).toBe(value)
  expect(newState.maxValue).toBe(5)
  expect(newState.messageText).toBe("")
})

test("max value should be changed", () => {
  const value = 12
  const newState = CounterReducer(initialState, changeMaxValueAC(value))

  expect(newState).not.toBe(initialState)
  expect(newState).not.toEqual(initialState)
  expect(newState.currentValue).toBe(0)
  expect(newState.startValue).toBe(0)
  expect(newState.maxValue).toBe(value)
  expect(newState.messageText).toBe("")
})

test("message text should be changed", () => {
  const messageText = "zenow"
  const newState = CounterReducer(initialState, changeMessageText(messageText))

  expect(newState).not.toBe(initialState)
  expect(newState).not.toEqual(initialState)
  expect(newState.currentValue).toBe(0)
  expect(newState.startValue).toBe(0)
  expect(newState.maxValue).toBe(5)
  expect(newState.messageText).toBe(messageText)
})
