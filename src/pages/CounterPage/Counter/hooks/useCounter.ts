import {
  incrementCurrentValue,
  resetCurrentValue,
} from "../../../../redux/counterReducer/counterReducer"
import { useAppDispatch, useAppSelector } from "../../../../redux/store"
import s from "../Counter.module.css"

export const useCounter = () => {
  const { currentValue, maxValue, startValue } = useAppSelector(
    (state) => state.counter
  )
  const dispatch = useAppDispatch()

  const incValue = () => {
    dispatch(incrementCurrentValue())
  }
  const resetCounter = () => {
    dispatch(resetCurrentValue())
  }

  const isIncrementButtonDisabled = currentValue === maxValue
  const isResetButtonDisabled = currentValue === startValue

  const currentValueStyle =
    s.currentValue + (currentValue === maxValue ? " " + s.error : "")

  return {
    currentValue,
    incValue,
    resetCounter,
    isIncrementButtonDisabled,
    isResetButtonDisabled,
    currentValueStyle,
  }
}
