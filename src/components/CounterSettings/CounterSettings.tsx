import { Container } from "../../styles/Container"
import { Input } from "../Input"
import { FlexWrapper } from "../../styles/FlexWrapper"
import { StyledButton } from "../../styles/StyledButton"
import { ChangeEvent /* , useState */ } from "react"

type CounterSettingsPropsType = {
  // currentValue: number
  startValue: number
  maxValue: number
  changeStartValue: (value: number) => void
  changeMaxValue: (value: number) => void
  changeMessageTextAndError: (value: string, error: boolean) => void
  inputStartValue: number
  inputMaxValue: number
  setInputStartValue: (value: number) => void
  setInputMaxValue: (value: number) => void
}

export const CounterSettings = (props: CounterSettingsPropsType) => {
  // const [inputStartValue, setInputStartValue] = useState(props.startValue)
  // const [inputMaxValue, setInputMaxValue] = useState(props.maxValue)

  // Render code
  if (props.inputStartValue !== props.startValue || props.inputMaxValue !== props.maxValue) {
    props.changeMessageTextAndError("Press 'set' button", false)
  }

  const isErrorMaxAndStart = props.inputMaxValue <= props.inputStartValue
  const errorMaxValue = isErrorMaxAndStart || props.inputMaxValue < 0
  const errorStartValue = isErrorMaxAndStart || props.inputStartValue < 0

  const isError = errorMaxValue || errorStartValue
  if (isError) {
    props.changeMessageTextAndError(isError ? "Incorrect value!" : "", isError)
  }

  // Functions
  const onChangeMaxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    props.setInputMaxValue(+value)
  }

  const onChangeStartValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    props.setInputStartValue(+value)
  }

  const onClickSetBtnHandler = () => {
    props.changeMaxValue(props.inputMaxValue)
    props.changeStartValue(props.inputStartValue)
    props.changeMessageTextAndError("", false)
  }

  return (
    <Container>
      <FlexWrapper direction="column">
        <Input
          error={errorMaxValue}
          title="max value:"
          value={props.inputMaxValue.toString()}
          onChange={onChangeMaxValueInputHandler}
        />
        <Input
          error={errorStartValue}
          title="start value:"
          value={props.inputStartValue.toString()}
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
