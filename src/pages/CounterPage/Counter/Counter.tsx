import { StyledButton } from "../../../components/StyledButton"
import { FlexWrapper } from "../../../components/FlexWrapper"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useCounter } from "./hooks/useCounter"

export const Counter = () => {
  const {
    currentValue,
    maxValue,
    incValue,
    resetCounter,
    isIncrementButtonDisabled,
    isResetButtonDisabled,
  } = useCounter()

  return (
    <>
      <FlexWrapper $justify="center" $align="center" $border $padding="20px">
        <CounterCurrentValue $isError={currentValue === maxValue}>
          {currentValue}
        </CounterCurrentValue>
      </FlexWrapper>
      <AdaptiveFlexWrapper
        $justify="space-between"
        $border
        $padding="20px"
        $gap="15px"
        $wrap="wrap"
      >
        <StyledButton onClick={incValue} disabled={isIncrementButtonDisabled}>
          inc
        </StyledButton>
        <StyledButton onClick={resetCounter} disabled={isResetButtonDisabled}>
          reset
        </StyledButton>
        <Link to={"/counter-settings"}>
          <StyledButton>set</StyledButton>
        </Link>
      </AdaptiveFlexWrapper>
    </>
  )
}

type CounterCurrentValueProps = { $isError: boolean }

const CounterCurrentValue = styled.div<CounterCurrentValueProps>`
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
