import { StyledButton } from "../../styledComponents/StyledButton"
import { Container } from "../../styledComponents/Container"
import { FlexWrapper } from "../../styledComponents/FlexWrapper"
import styled from "styled-components"

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
    <Container>
      <FlexWrapper $justify="center" $align="center" $border $padding="30px">
        <CounterCurrentValue $isError={props.isError || props.currentValue === props.maxValue}>
          {props.messageText || props.currentValue}
        </CounterCurrentValue>
      </FlexWrapper>
      <FlexWrapper $justify="space-around" $border $padding="20px">
        <StyledButton onClick={incrementButtonOnClick} disabled={props.isDisabledIncrementButton}>
          inc
        </StyledButton>
        <StyledButton onClick={resetButtonOnClick} disabled={props.isDisabledResetButton}>
          reset
        </StyledButton>
      </FlexWrapper>
    </Container>
  )
}

type CounterCurrentValuePropsType = { $isError: boolean }

const CounterCurrentValue = styled.div<CounterCurrentValuePropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => (p.$isError ? "red" : "")};
`
