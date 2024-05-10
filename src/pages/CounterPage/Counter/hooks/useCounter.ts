import {
  incrementCurrentValueAC,
  resetCurrentValueAC,
} from "../../../../redux/counterReducer/counterReducer"
import { useAppDispatch, useAppSelector } from "../../../../redux/store"

export const useCounter = () => {
  const { currentValue, isError, maxValue, messageText, startValue } = useAppSelector(
    (state) => state.counter
  )
  const dispatch = useAppDispatch()

  const incValue = () => {
    dispatch(incrementCurrentValueAC())
  }

  const resetCounter = () => {
    dispatch(resetCurrentValueAC())
  }

  const isDisabledIncrementButton = currentValue === maxValue || !!messageText
  const isDisabledResetButton = currentValue === startValue || !!messageText

  return {
    currentValue,
    isError,
    maxValue,
    messageText,
    startValue,
    incValue,
    resetCounter,
    isDisabledIncrementButton,
    isDisabledResetButton,
  }
}
