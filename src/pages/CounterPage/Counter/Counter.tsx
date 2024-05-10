import { StyledButton } from "../../../components/StyledButton"
import { FlexWrapper } from "../../../components/FlexWrapper"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useCounter } from "./hooks/useCounter"

export const Counter = () => {
  const {
    currentValue,
    isError,
    maxValue,
    messageText,
    incValue,
    resetCounter,
    isDisabledIncrementButton,
    isDisabledResetButton,
  } = useCounter()

  return (
    <>
      <FlexWrapper $justify="center" $align="center" $border $padding="20px">
        <CounterCurrentValue $isError={isError || currentValue === maxValue}>
          {messageText || currentValue}
        </CounterCurrentValue>
      </FlexWrapper>
      <AdaptiveFlexWrapper
        $justify="space-between"
        $border
        $padding="20px"
        $gap="15px"
        $wrap="wrap"
      >
        <StyledButton onClick={incValue} disabled={isDisabledIncrementButton}>
          inc
        </StyledButton>
        <StyledButton onClick={resetCounter} disabled={isDisabledResetButton}>
          reset
        </StyledButton>
        <Link to={"/counter-settings"}>
          <StyledButton>set</StyledButton>
        </Link>
      </AdaptiveFlexWrapper>
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
  font-size: 50px;
`

const AdaptiveFlexWrapper = styled(FlexWrapper)`
  @media (max-width: 420px) {
    justify-content: center;
  }
`
