import { useSelector } from "react-redux"
import { AppRootStateType } from "../../../../redux/store"
import { useDispatch } from "react-redux"
import {
  setErrorAC,
  setInputMaxValueAC,
  setInputStartValueAC,
  setMaxValueAC,
  setMessageTextAC,
  setStartValueAC,
} from "../../../../redux/counterReducer/counterReducer"
import { ChangeEvent, useEffect } from "react"

const INVALID_VALUE_MESSAGE = "Invalid value"
const PRESS_SET_BUTTON_MESSAGE = "Enter values and press 'set' button"

export const useCounterSettings = () => {
  const { inputMaxValue, inputStartValue, isError, maxValue, messageText, startValue } =
    useSelector((state: AppRootStateType) => state.counter)
  const dispatch = useDispatch()

  const setButtonOnClick = () => {
    dispatch(setStartValueAC(inputStartValue))
    dispatch(setMaxValueAC(inputMaxValue))
    dispatch(setMessageTextAC(""))
    dispatch(setErrorAC(false))
  }

  const startValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputStartValueAC(+e.currentTarget.value))
  }

  const maxValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputMaxValueAC(+e.currentTarget.value))
  }

  const isValueChanged = inputStartValue !== startValue || inputMaxValue !== maxValue

  const isValueInvalid =
    inputStartValue < 0 || inputMaxValue < 0 || inputMaxValue <= inputStartValue

  useEffect(() => {
    if (isValueChanged && !isValueInvalid && messageText !== PRESS_SET_BUTTON_MESSAGE) {
      dispatch(setMessageTextAC(PRESS_SET_BUTTON_MESSAGE))
      dispatch(setErrorAC(false))
    }
    if (isValueInvalid && messageText !== INVALID_VALUE_MESSAGE) {
      dispatch(setMessageTextAC(INVALID_VALUE_MESSAGE))
      dispatch(setErrorAC(true))
    }
  }, [isValueChanged, isValueInvalid, messageText, dispatch])

  return {
    isValueInvalid,
    inputStartValue,
    startValueOnChange,
    inputMaxValue,
    maxValueOnChange,
    setButtonOnClick,
  }
}
