import { ThunkAction } from "redux-thunk"
import { AppRootStateType, RootActionType } from "../store"
import { localStorageAPI } from "../../localStorageAPI/localStorageAPI"

export type CounterStateType = {
  currentValue: number
  startValue: number
  maxValue: number
  inputStartValue: number
  inputMaxValue: number
  messageText: string
  isError: boolean
}

const INITIAL_CURRENT_VALUE = 0
const INITIAL_START_VALUE = 0
const INITIAL_MAX_VALUE = 5
const INITIAL_MESSAGE_TEXT = ""
const INITIAL_IS_ERROR_VALUE = false

export const initialState: CounterStateType = {
  currentValue: INITIAL_CURRENT_VALUE,
  startValue: INITIAL_START_VALUE,
  maxValue: INITIAL_MAX_VALUE,
  inputStartValue: INITIAL_START_VALUE,
  inputMaxValue: INITIAL_MAX_VALUE,
  messageText: INITIAL_MESSAGE_TEXT,
  isError: INITIAL_IS_ERROR_VALUE,
}

export type CounterReducerActionType =
  | ReturnType<typeof setCounterStateAC>
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
    case "SET_COUNTER_STATE":
      return action.state
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

// actions
export const setCounterStateAC = (state: CounterStateType) =>
  ({
    type: "SET_COUNTER_STATE",
    state,
  } as const)

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

// thunks
export const setCounterStateTC =
  (): ThunkAction<void, AppRootStateType, unknown, RootActionType> => (dispatch) => {
    const state = localStorageAPI.load()
    if (state) {
      dispatch(setCounterStateAC(state.counter))
    }
  }
