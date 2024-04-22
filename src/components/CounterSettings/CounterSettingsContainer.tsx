import { CounterSettings } from "./CounterSettings"
import { useDispatch } from "react-redux"
import {
  setMaxValueAC,
  setMessageTextAC,
  setStartValueAC,
  setInputMaxValueAC,
  setInputStartValueAC,
  setErrorAC,
} from "../../redux/counterReducer/counterReducer"
import { useSelector } from "react-redux"
import { AppRootStateType } from "../../redux/store"
import { useEffect } from "react"

const INVALID_VALUE_MESSAGE = "Invalid value"
const PRESS_SET_BUTTON_MESSAGE = "Enter values and press 'set' button"

export const CounterSettingsContainer = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: AppRootStateType) => state.counter)

  const setButtonOnClick = () => {
    dispatch(setStartValueAC(state.inputStartValue))
    dispatch(setMaxValueAC(state.inputMaxValue))
    dispatch(setMessageTextAC(""))
    dispatch(setErrorAC(false))
  }

  const startValueOnChange = (inputStartValue: number) => {
    dispatch(setInputStartValueAC(inputStartValue))
  }

  const maxValueOnChange = (inputMaxValue: number) => {
    dispatch(setInputMaxValueAC(inputMaxValue))
  }

  const isValueChanged =
    state.inputStartValue !== state.startValue || state.inputMaxValue !== state.maxValue

  const isError =
    state.inputStartValue < 0 ||
    state.inputMaxValue < 0 ||
    state.inputMaxValue <= state.inputStartValue

  useEffect(() => {
    if (isValueChanged && !isError && state.messageText !== PRESS_SET_BUTTON_MESSAGE) {
      dispatch(setMessageTextAC(PRESS_SET_BUTTON_MESSAGE))
      dispatch(setErrorAC(false))
    }

    if (isError && state.messageText !== INVALID_VALUE_MESSAGE) {
      dispatch(setMessageTextAC(INVALID_VALUE_MESSAGE))
      dispatch(setErrorAC(true))
    }
  }, [isValueChanged, isError, state.messageText, dispatch])

  return (
    <CounterSettings
      startValue={state.inputStartValue}
      maxValue={state.inputMaxValue}
      startValueOnChange={startValueOnChange}
      maxValueOnChange={maxValueOnChange}
      setButtonOnClick={setButtonOnClick}
      isError={isError}
    />
  )
}
