import { useSelector } from "react-redux"
import { CounterSettings } from "./CounterSettings"
import { StateType } from "../../redux/store"
import { useDispatch } from "react-redux"
import {
  changeMaxValueAC,
  changeMessageTextAndErrorAC,
  changeStartValueAC,
} from "../../redux/CounterReducer/CounterReducer"
import {
  changeInputMaxValueAC,
  changeInputStartValueAC,
} from "../../redux/CounterSettingsReducer/CounterSettingsReducer"

export const CounterSettingsContainer = () => {
  const { counter, counterSettings } = useSelector((state: StateType) => state)
  const dispatch = useDispatch()

  const changeStartValue = (value: number) => {
    dispatch(changeStartValueAC(value))
  }

  const changeMaxValue = (value: number) => {
    dispatch(changeMaxValueAC(value))
  }

  const changeMessageTextAndError = (messageText: string, error: boolean) => {
    dispatch(changeMessageTextAndErrorAC(messageText, error))
  }

  const setInputStartValue = (value: number) => {
    dispatch(changeInputStartValueAC(value))
  }

  const setInputMaxValue = (value: number) => {
    dispatch(changeInputMaxValueAC(value))
  }

  return (
    <CounterSettings
      startValue={counter.startValue}
      maxValue={counter.maxValue}
      changeStartValue={changeStartValue}
      changeMaxValue={changeMaxValue}
      changeMessageTextAndError={changeMessageTextAndError}
      inputStartValue={counterSettings.inputStartValue}
      inputMaxValue={counterSettings.inputMaxValue}
      setInputStartValue={setInputStartValue}
      setInputMaxValue={setInputMaxValue}
    />
  )
}
