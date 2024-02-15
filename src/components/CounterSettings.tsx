import { Container } from "./Container"
import { Input } from "./Input"
import { FlexWrapper } from "./FlexWrapper"
import { StyledButton } from "./StyledButton"
import { ChangeEvent, useState } from "react"

type CounterSettingsPropsType = {
  value: number
  startValue: number
  maxValue: number
  changeStartValue: (value: number) => void
  changeMaxValue: (value: number) => void
  changeMessageText: (value: string, error: boolean) => void
}

export const CounterSettings = (props: CounterSettingsPropsType) => {
  const [inputStartValue, setInputStartValue] = useState(props.startValue)
  const [inputMaxValue, setInputMaxValue] = useState(props.maxValue)

  // Render code
  if (inputStartValue !== props.startValue || inputMaxValue !== props.maxValue) {
    props.changeMessageText("Press 'set' button", false)
  }

  const isErrorMaxAndStart = inputMaxValue <= inputStartValue
  const errorMaxValue = isErrorMaxAndStart || inputMaxValue < 0
  const errorStartValue = isErrorMaxAndStart || inputStartValue < 0

  const isError = errorMaxValue || errorStartValue
  if (isError) {
    props.changeMessageText(isError ? "Incorrect value!" : "", isError)
  }

  // Functions
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
        <StyledButton disabled={errorMaxValue || errorStartValue} onClick={onClickSetBtnHandler}>
          set
        </StyledButton>
      </FlexWrapper>
    </Container>
  )
}
