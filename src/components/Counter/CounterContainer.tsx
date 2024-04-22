import { useSelector } from "react-redux"
import { Counter } from "./Counter"
import { RootStateType } from "../../redux/store"
import { useDispatch } from "react-redux"
import {
  incrementCurrentValueAC,
  resetCurrentValueAC,
} from "../../redux/counterReducer/counterReducer"

export const CounterContainer = () => {
  const state = useSelector((state: RootStateType) => state.counter)
  const dispatch = useDispatch()

  const incValue = () => {
    dispatch(incrementCurrentValueAC())
  }

  const resetCounter = () => {
    dispatch(resetCurrentValueAC())
  }

  return (
    <Counter
      currentValue={state.currentValue}
      maxValue={state.maxValue}
      messageText={state.messageText}
      isDisabledIncrementButton={state.currentValue === state.maxValue || !!state.messageText}
      isDisabledResetButton={state.currentValue === state.startValue || !!state.messageText}
      incrementOnClick={incValue}
      resetButtonOnClick={resetCounter}
      isError={state.isError}
    />
  )
}
