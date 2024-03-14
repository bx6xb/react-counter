import { useSelector } from "react-redux"
import { Counter } from "./Counter"
import { StateType } from "../../redux/store"
import { useDispatch } from "react-redux"
import {
  incrementCurrentValueAC,
  resetCurrentValueAC,
} from "../../redux/CounterReducer/CounterReducer"
import { INVALID_VALUE_MESSAGE } from "../CounterSettings/CounterSettingsContainer"

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
      currentValue={state.messageText || state.currentValue}
      isDisabledIncrementButton={state.currentValue === state.maxValue || !!state.messageText}
      isDisabledResetButton={state.currentValue === state.startValue || !!state.messageText}
      incrementOnClick={incValue}
      resetButtonOnClick={resetCounter}
      isError={state.messageText === INVALID_VALUE_MESSAGE}
    />
  )
}
