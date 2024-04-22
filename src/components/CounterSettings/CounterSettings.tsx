import { Container } from "../../styles/Container"
import { Input } from "../Input"
import { FlexWrapper } from "../../styles/FlexWrapper"
import { StyledButton } from "../../styles/StyledButton"
import React, { ChangeEvent } from "react"

type CounterSettingsPropsType = {
  startValue: number
  maxValue: number
  startValueOnChange: (value: number) => void
  maxValueOnChange: (value: number) => void
  setButtonOnClick: () => void
  isError: boolean
}

export const CounterSettings = React.memo((props: CounterSettingsPropsType) => {
  const startValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.startValueOnChange(+e.currentTarget.value)
  }

  const maxValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.maxValueOnChange(+e.currentTarget.value)
  }

  const setButtonOnClick = () => {
    props.setButtonOnClick()
  }

  return (
    <Container>
      <FlexWrapper $direction="column">
        <Input
          isError={props.isError}
          title="start value:"
          value={props.startValue.toString()}
          onChange={startValueOnChange}
        />
        <Input
          isError={props.isError}
          title="max value:"
          value={props.maxValue.toString()}
          onChange={maxValueOnChange}
        />
      </FlexWrapper>

      <FlexWrapper $border $padding="20px" $justify="center" $align="center">
        <StyledButton disabled={props.isError} onClick={setButtonOnClick}>
          set
        </StyledButton>
      </FlexWrapper>
    </Container>
  )
})
