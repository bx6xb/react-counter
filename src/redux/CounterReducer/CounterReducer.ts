export type CounterStateType = {
  currentValue: number
  startValue: number
  maxValue: number
  inputStartValue: number
  inputMaxValue: number
  messageText: string
  isError: boolean
}

const INITIAL_START_VALUE = 0
const INITIAL_MAX_VALUE = 5

export const initialState: CounterStateType = {
  currentValue: 0,
  startValue: INITIAL_START_VALUE,
  maxValue: INITIAL_MAX_VALUE,
  inputStartValue: INITIAL_START_VALUE,
  inputMaxValue: INITIAL_MAX_VALUE,
  messageText: "",
  isError: false,
}

type CounterReducerActionType =
  | ReturnType<typeof incrementCurrentValueAC>
  | ReturnType<typeof resetCurrentValueAC>
  | ReturnType<typeof setStartValueAC>
  | ReturnType<typeof setMaxValueAC>
  | ReturnType<typeof setMessageTextAC>
  | ReturnType<typeof setInputStartValueAC>
  | ReturnType<typeof setInputMaxValueAC>
  | ReturnType<typeof setErrorAC>

export const counterReducer = (
  state: CounterStateType = initialState,
  action: CounterReducerActionType
): CounterStateType => {
  switch (action.type) {
    case "INCREMENT_CURRENT_VALUE":
      return {
        ...state,
        currentValue: state.currentValue + 1,
      }
    case "RESET_CURRENT_VALUE":
      return {
        ...state,
        currentValue: state.startValue,
      }
    case "SET_START_VALUE":
      return {
        ...state,
        currentValue: action.newStartValue,
        startValue: action.newStartValue,
      }
    case "SET_MAX_VALUE":
      return {
        ...state,
        maxValue: action.newMaxValue,
      }
    case "SET_MESSAGE_TEXT":
      return {
        ...state,
        messageText: action.messageText,
      }
    case "SET_INPUT_START_VALUE":
      return {
        ...state,
        inputStartValue: action.inputStartValue,
      }
    case "SET_INPUT_MAX_VALUE":
      return {
        ...state,
        inputMaxValue: action.inputMaxValue,
      }
    case "SET_ERROR":
      return {
        ...state,
        isError: action.isError,
      }
    default:
      return state
  }
}

export const incrementCurrentValueAC = () => ({ type: "INCREMENT_CURRENT_VALUE" } as const)

export const resetCurrentValueAC = () =>
  ({
    type: "RESET_CURRENT_VALUE",
  } as const)

export const setStartValueAC = (newStartValue: number) =>
  ({
    type: "SET_START_VALUE",
    newStartValue,
  } as const)

export const setMaxValueAC = (newMaxValue: number) =>
  ({
    type: "SET_MAX_VALUE",
    newMaxValue,
  } as const)

export const setInputStartValueAC = (inputStartValue: number) =>
  ({
    type: "SET_INPUT_START_VALUE",
    inputStartValue,
  } as const)

export const setInputMaxValueAC = (inputMaxValue: number) =>
  ({
    type: "SET_INPUT_MAX_VALUE",
    inputMaxValue,
  } as const)

export const setMessageTextAC = (messageText: string) =>
  ({
    type: "SET_MESSAGE_TEXT",
    messageText,
  } as const)

export const setErrorAC = (isError: boolean) =>
  ({
    type: "SET_ERROR",
    isError,
  } as const)
