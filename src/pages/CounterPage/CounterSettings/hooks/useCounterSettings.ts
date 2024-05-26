import { useAppDispatch, useAppSelector } from "../../../../redux/store"
import { setMaxValue, setStartValue } from "../../../../redux/counterReducer/counterReducer"
import { ChangeEvent } from "react"
import {
  setInputMaxValue,
  setInputStartValue,
} from "../../../../redux/counterSettingsReducer/counterSettingsReducer"

export const useCounterSettings = () => {
  const { inputMaxValue, inputStartValue } = useAppSelector((state) => state.counterSettings)
  const dispatch = useAppDispatch()

  const setButtonOnClick = () => {
    dispatch(setStartValue({ startValue: inputStartValue }))
    dispatch(setMaxValue({ maxValue: inputMaxValue }))
  }
  const startValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputStartValue({ inputStartValue: +e.currentTarget.value }))
  }
  const maxValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputMaxValue({ inputMaxValue: +e.currentTarget.value }))
  }

  const isValueInvalid =
    inputStartValue < 0 || inputMaxValue < 0 || inputMaxValue <= inputStartValue

  return {
    isValueInvalid,
    inputStartValue,
    startValueOnChange,
    inputMaxValue,
    maxValueOnChange,
    setButtonOnClick,
  }
}
