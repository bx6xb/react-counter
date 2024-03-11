import { useSelector } from "react-redux"
import { Counter } from "./Counter"
import { StateType } from "../../redux/store"
import { useDispatch } from "react-redux"
import {
  incrementCurrentValueAC,
  resetCurrentValueAC,
} from "../../redux/CounterReducer/CounterReducer"

export const CounterContainer = () => {
  const state = useSelector((state: StateType) => state.counter)
  const dispatch = useDispatch()

  const incValue = () => {
    dispatch(incrementCurrentValueAC(1))
  }

  const resetCounter = () => {
    dispatch(resetCurrentValueAC())
  }

  return (
    <Counter
      currentValue={state.currentValue}
      startValue={state.startValue}
      maxValue={state.maxValue}
      incValue={incValue}
      resetCounter={resetCounter}
      messageText={state.messageText}
      error={state.error}
    />
  )
}
