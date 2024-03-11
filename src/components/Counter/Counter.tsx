import { StyledButton } from "../../styles/StyledButton"
import { Container } from "../../styles/Container"
import { FlexWrapper } from "../../styles/FlexWrapper"
import styled from "styled-components"

type CounterPropsType = {
  currentValue: number | string
  startValue: number
  maxValue: number
  incValue: () => void
  resetCounter: () => void
  messageText: string
  error: boolean
}

export const Counter = (props: CounterPropsType) => {
  return (
    <Container>
      <FlexWrapper justify="center" align="center" border padding="30px">
        <CounterCurrentValue error={props.error || props.currentValue === props.maxValue}>
          {props.currentValue}
        </CounterCurrentValue>
      </FlexWrapper>
      <FlexWrapper justify="space-around" border padding="20px">
        <StyledButton
          onClick={props.incValue}
          disabled={props.currentValue === props.maxValue || !!props.messageText}
        >
          inc
        </StyledButton>
        <StyledButton
          onClick={props.resetCounter}
          disabled={props.currentValue === props.startValue || !!props.messageText}
        >
          reset
        </StyledButton>
      </FlexWrapper>
    </Container>
  )
}

// StyledCounterCurrentValue
const CounterCurrentValue = styled.div<{ error: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => (p.error ? "red" : "")};
`
