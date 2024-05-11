import {
  incrementCurrentValueAC,
  resetCurrentValueAC,
} from "../../../../redux/counterReducer/counterReducer"
import { useAppDispatch, useAppSelector } from "../../../../redux/store"

export const useCounter = () => {
  const { currentValue, maxValue, startValue } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  const incValue = () => {
    dispatch(incrementCurrentValueAC())
  }
  const resetCounter = () => {
    dispatch(resetCurrentValueAC())
  }

  const isIncrementButtonDisabled = currentValue === maxValue
  const isResetButtonDisabled = currentValue === startValue

  return {
    currentValue,
    maxValue,
    incValue,
    resetCounter,
    isIncrementButtonDisabled,
    isResetButtonDisabled,
  }
}
