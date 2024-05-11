import { useAppDispatch, useAppSelector } from "../../../../redux/store"
import { setMaxValueAC, setStartValueAC } from "../../../../redux/counterReducer/counterReducer"
import { ChangeEvent } from "react"
import {
  setInputMaxValueAC,
  setInputStartValueAC,
} from "../../../../redux/counterSettingsReducer/counterSettingsReducer"

export const useCounterSettings = () => {
  const { inputMaxValue, inputStartValue } = useAppSelector((state) => state.counterSettings)
  const dispatch = useAppDispatch()

  const setButtonOnClick = () => {
    dispatch(setStartValueAC({ startValue: inputStartValue }))
    dispatch(setMaxValueAC({ maxValue: inputMaxValue }))
  }
  const startValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputStartValueAC({ inputStartValue: +e.currentTarget.value }))
  }
  const maxValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputMaxValueAC({ inputMaxValue: +e.currentTarget.value }))
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
