import { Input } from "../../../components/Input"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { StyledButton } from "../../../components/StyledButton"
import React, { ChangeEvent } from "react"
import { Link } from "react-router-dom"

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
    <>
      <FlexWrapper $direction="column" $border $padding="15px">
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
        <Link to="/counter">
          <StyledButton disabled={props.isError} onClick={setButtonOnClick}>
            set
          </StyledButton>
        </Link>
      </FlexWrapper>
    </>
  )
})