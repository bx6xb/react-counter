import { StyledButton } from "../../../components/StyledButton"
import { FlexWrapper } from "../../../components/FlexWrapper"
import styled from "styled-components"
import { Link } from "react-router-dom"

type CounterPropsType = {
  currentValue: number
  maxValue: number
  messageText: string
  isError: boolean
  isDisabledIncrementButton: boolean
  isDisabledResetButton: boolean
  incrementOnClick: () => void
  resetButtonOnClick: () => void
}

export const Counter = (props: CounterPropsType) => {
  const incrementButtonOnClick = () => props.incrementOnClick()
  const resetButtonOnClick = () => props.resetButtonOnClick()

  return (
    <>
      <FlexWrapper $justify="center" $align="center" $border $padding="30px">
        <CounterCurrentValue $isError={props.isError || props.currentValue === props.maxValue}>
          {props.messageText || props.currentValue}
        </CounterCurrentValue>
      </FlexWrapper>
      <FlexWrapper $justify="space-between" $border $padding="20px" $gap="15px">
        <StyledButton onClick={incrementButtonOnClick} disabled={props.isDisabledIncrementButton}>
          inc
        </StyledButton>
        <StyledButton onClick={resetButtonOnClick} disabled={props.isDisabledResetButton}>
          reset
        </StyledButton>
        <Link to={"/counter-settings"}>
          <StyledButton>set</StyledButton>
        </Link>
      </FlexWrapper>
    </>
  )
}

type CounterCurrentValuePropsType = { $isError: boolean }

const CounterCurrentValue = styled.div<CounterCurrentValuePropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(p) => (p.$isError ? "red" : "")};
`
