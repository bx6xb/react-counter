import { Input } from "../../../components/Input/Input"
import { Button } from "../../../components/Button/Button"
import { Link } from "react-router-dom"
import { useCounterSettings } from "./hooks/useCounterSettings"
import s from "./CounterSettings.module.css"

export const CounterSettings = () => {
  const {
    isValueInvalid,
    inputStartValue,
    startValueOnChange,
    inputMaxValue,
    maxValueOnChange,
    setButtonOnClick,
  } = useCounterSettings()

  return (
    <>
      <div className={s.inputWrapper}>
        <Input
          isError={isValueInvalid}
          title="start value:"
          value={inputStartValue.toString()} // to show 0 in input to user
          onChange={startValueOnChange}
        />
        <Input
          isError={isValueInvalid}
          title="max value:"
          value={inputMaxValue.toString()} // to show 0 in input to user
          onChange={maxValueOnChange}
        />
      </div>

      <div className={s.buttonWrapper}>
        <Link to="/counter">
          <Button disabled={isValueInvalid} onClick={setButtonOnClick}>
            set
          </Button>
        </Link>
      </div>
    </>
  )
}
