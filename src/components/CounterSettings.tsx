import { Container } from "./Container"
import { Input } from "./Input"
import { FlexWrapper } from "./FlexWrapper"
import { Button } from "./Button"
import { ChangeEvent, useEffect, useState } from "react"

type CounterSettingsPropsType = {
  value: number
  startValue: number
  maxValue: number
  changeStartValue: (value: number) => void
  changeMaxValue: (value: number) => void
  changeMessageText: (value: string, error: boolean) => void
}

export const CounterSettings = (props: CounterSettingsPropsType) => {
  const [inputMaxValue, setInputMaxValue] = useState(5)
  const [inputStartValue, setInputStartValue] = useState(0)
  const [errorMaxValue, setErrorMaxValue] = useState(false)
  const [errorStartValue, setErrorStartValue] = useState(false)

  const onChangeMaxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    value && setInputMaxValue(+value)
  }

  const onChangeStartValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    value && setInputStartValue(+value)
  }

  const onClickSetBtnHandler = () => {
    props.changeMaxValue(inputMaxValue)
    props.changeStartValue(inputStartValue)
    props.changeMessageText("", false)
  }

  useEffect(() => {
    const error = inputMaxValue === inputStartValue || inputMaxValue < inputStartValue
    setErrorMaxValue(error)
    setErrorStartValue(error)
    if (error) return
    setErrorMaxValue(inputMaxValue < 0)
    setErrorStartValue(inputStartValue < 0)
    if (!(errorMaxValue || errorStartValue)) {
      props.changeMessageText("Press 'set' button", false)
    }
  }, [inputMaxValue, inputStartValue])

  useEffect(() => {
    const error = errorMaxValue || errorStartValue
    props.changeMessageText(error ? "Incorrect value!" : "", error)
  }, [errorMaxValue, errorStartValue])

  return (
    <Container>
      <FlexWrapper direction="column">
        <Input
          error={errorMaxValue}
          title="max value:"
          value={inputMaxValue.toString()}
          onChange={onChangeMaxValueInputHandler}
        />
        <Input
          error={errorStartValue}
          title="start value:"
          value={inputStartValue.toString()}
          onChange={onChangeStartValueInputHandler}
        />
      </FlexWrapper>

      <FlexWrapper border padding="20px" justify="center" align="center">
        <Button disabled={errorMaxValue || errorStartValue} onClick={onClickSetBtnHandler}>
          set
        </Button>
      </FlexWrapper>
    </Container>
  )
}
