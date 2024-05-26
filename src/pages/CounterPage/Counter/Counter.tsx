import { Button } from "../../../components/Button/Button"
import { Link } from "react-router-dom"
import { useCounter } from "./hooks/useCounter"
import s from "./Counter.module.css"

export const Counter = () => {
  const {
    currentValue,
    incValue,
    resetCounter,
    isIncrementButtonDisabled,
    isResetButtonDisabled,
    currentValueStyle,
  } = useCounter()

  return (
    <>
      <div className={currentValueStyle}>{currentValue}</div>
      <div className={s.buttonWrapper}>
        <Button onClick={incValue} disabled={isIncrementButtonDisabled}>
          inc
        </Button>
        <Button onClick={resetCounter} disabled={isResetButtonDisabled}>
          reset
        </Button>
        <Link to={"/counter-settings"}>
          <Button>set</Button>
        </Link>
      </div>
    </>
  )
}
