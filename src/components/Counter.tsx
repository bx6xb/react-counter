import { Button } from "./Button"
import { Container } from "./Container"
import { FlexWrapper } from "./FlexWrapper"
import styled from "styled-components"

type CounterPropsType = {
  value: number | string
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
        <CounterCurrentValue error={props.error || props.value === props.maxValue}>{props.value}</CounterCurrentValue>
      </FlexWrapper>
      <FlexWrapper justify="space-around" border padding="20px">
        <Button onClick={props.incValue} disabled={props.value === props.maxValue || !!props.messageText}>
          inc
        </Button>
        <Button onClick={props.resetCounter} disabled={props.value === props.startValue || !!props.messageText}>
          reset
        </Button>
      </FlexWrapper>
    </Container>
  )
}

const CounterCurrentValue = styled.div<{ error: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => (p.error ? "red" : "")};
`
