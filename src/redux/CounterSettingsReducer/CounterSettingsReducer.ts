import { INITIAL_MAX_VALUE, INITIAL_START_VALUE } from "../CounterReducer/CounterReducer"

export type CounterSettingsStateType = {
  inputStartValue: number
  inputMaxValue: number
}

export const initialState: CounterSettingsStateType = {
  inputStartValue: INITIAL_START_VALUE,
  inputMaxValue: INITIAL_MAX_VALUE,
}

type ChangeInputStartValueActionType = ReturnType<typeof changeInputStartValueAC>
type ChangeInputMaxValueActionType = ReturnType<typeof changeInputMaxValueAC>

type CounterSettingsReducerActionType =
  | ChangeInputStartValueActionType
  | ChangeInputMaxValueActionType

export const CounterSettingsReducer = (
  state: CounterSettingsStateType = initialState,
  action: CounterSettingsReducerActionType
): CounterSettingsStateType => {
  switch (action.type) {
    case "CHANGE_INPUT_START_VALUE":
      return {
        ...state,
        inputStartValue: action.value,
      }
    case "CHANGE_INPUT_MAX_VALUE":
      return {
        ...state,
        inputMaxValue: action.value,
      }
    default:
      return state
  }
}

export const changeInputStartValueAC = (value: number) =>
  ({
    type: "CHANGE_INPUT_START_VALUE",
    value,
  } as const)

export const changeInputMaxValueAC = (value: number) =>
  ({
    type: "CHANGE_INPUT_MAX_VALUE",
    value,
  } as const)
