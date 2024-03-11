export type CounterStateType = {
  currentValue: number
  startValue: number
  maxValue: number
  messageText: string
  error: boolean
}

export const INITIAL_CURRENT_VALUE = 0
export const INITIAL_START_VALUE = 0
export const INITIAL_MAX_VALUE = 5

export const initialState: CounterStateType = {
  currentValue: INITIAL_CURRENT_VALUE,
  startValue: INITIAL_START_VALUE,
  maxValue: INITIAL_MAX_VALUE,
  messageText: "",
  error: false,
}

type IncrementCurrentValueActionType = ReturnType<typeof incrementCurrentValueAC>
type ResetCurrentValueActionType = ReturnType<typeof resetCurrentValueAC>
type ChangeStartValueActionType = ReturnType<typeof changeStartValueAC>
type ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
type ChangeMessageTextAndErrorActionType = ReturnType<typeof changeMessageTextAndErrorAC>

type CounterReducerActionType =
  | IncrementCurrentValueActionType
  | ResetCurrentValueActionType
  | ChangeStartValueActionType
  | ChangeMaxValueActionType
  | ChangeMessageTextAndErrorActionType

export const CounterReducer = (
  state: CounterStateType = initialState,
  action: CounterReducerActionType
): CounterStateType => {
  switch (action.type) {
    case "INCREMENT_CURRENT_VALUE":
      return {
        ...state,
        currentValue: state.currentValue + action.summand,
      }
    case "RESET_CURRENT_VALUE":
      return {
        ...state,
        currentValue: state.startValue,
      }
    case "CHANGE_START_VALUE":
      return {
        ...state,
        currentValue: action.newStartValue,
        startValue: action.newStartValue,
      }
    case "CHANGE_MAX_VALUE":
      return {
        ...state,
        maxValue: action.newMaxValue,
      }
    case "CHANGE_MESSAGE_TEXT_AND_ERROR":
      return {
        ...state,
        messageText: action.messageText,
        error: action.error,
      }
    default:
      return state
  }
}

export const incrementCurrentValueAC = (summand: number) =>
  ({ type: "INCREMENT_CURRENT_VALUE", summand } as const)

export const resetCurrentValueAC = () =>
  ({
    type: "RESET_CURRENT_VALUE",
  } as const)

export const changeStartValueAC = (newStartValue: number) =>
  ({
    type: "CHANGE_START_VALUE",
    newStartValue,
  } as const)

export const changeMaxValueAC = (newMaxValue: number) =>
  ({
    type: "CHANGE_MAX_VALUE",
    newMaxValue,
  } as const)

export const changeMessageTextAndErrorAC = (messageText: string, error: boolean) =>
  ({
    type: "CHANGE_MESSAGE_TEXT_AND_ERROR",
    messageText,
    error,
  } as const)
