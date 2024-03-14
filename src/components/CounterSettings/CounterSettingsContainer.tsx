import { CounterSettings } from "./CounterSettings"
import { useDispatch } from "react-redux"
import {
  INITIAL_MAX_VALUE,
  INITIAL_START_VALUE,
  changeMaxValueAC,
  changeMessageText,
  changeStartValueAC,
} from "../../redux/CounterReducer/CounterReducer"
import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { StateType } from "../../redux/store"

export const INVALID_VALUE_MESSAGE = "Invalid value!"
export const PRESS_SET_BUTTON_MESSAGE = "Press 'set' button"

export const CounterSettingsContainer = () => {
  const [inputStartValue, setInputStartValue] = useState(INITIAL_START_VALUE)
  const [inputMaxValue, setInputMaxValue] = useState(INITIAL_MAX_VALUE)

  const dispatch = useDispatch()
  const state = useSelector((state: StateType) => state.counter)

  const setButtonOnClick = useCallback(() => {
    dispatch(changeStartValueAC(inputStartValue))
    dispatch(changeMaxValueAC(inputMaxValue))
  }, [dispatch, inputStartValue, inputMaxValue])

  const isError = inputStartValue < 0 || inputMaxValue < 0 || inputStartValue >= inputMaxValue
  const isChanged = state.startValue !== inputStartValue || state.maxValue !== inputMaxValue

  useEffect(() => {
    if (isError) {
      dispatch(changeMessageText(INVALID_VALUE_MESSAGE))
    } else {
      dispatch(changeMessageText(""))
    }
  }, [isError])

  // useEffect(() => {
  //   if (isChanged) {
  //     dispatch(changeMessageText(PRESS_SET_BUTTON_MESSAGE))
  //   } else {
  //     dispatch(changeMessageText(""))
  //   }
  // }, [isChanged])

  return (
    <CounterSettings
      startValue={inputStartValue}
      maxValue={inputMaxValue}
      startValueOnChange={setInputStartValue}
      maxValueOnChange={setInputMaxValue}
      setButtonOnClick={setButtonOnClick}
      isError={isError}
    />
  )
}
