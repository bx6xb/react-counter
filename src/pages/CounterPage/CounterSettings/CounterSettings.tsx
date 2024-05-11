import { Input } from "../../../components/Input"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { StyledButton } from "../../../components/StyledButton"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useCounterSettings } from "./hooks/useCounterSettings"

export const CounterSettings = () => {
  const {
    isValueInvalid,
    inputStartValue,
    startValueOnChange,
    inputMaxValue,
    maxValueOnChange,
    setButtonOnClick,
  } = useCounterSettings()

  return (
    <>
      <AdaptiveFlexWrapper $direction="column" $border $padding="15px">
        <Input
          isError={isValueInvalid}
          title="start value:"
          value={inputStartValue.toString()} // to show 0 in input to user
          onChange={startValueOnChange}
        />
        <Input
          isError={isValueInvalid}
          title="max value:"
          value={inputMaxValue.toString()} // to show 0 in input to user
          onChange={maxValueOnChange}
        />
      </AdaptiveFlexWrapper>

      <FlexWrapper $border $padding="20px" $justify="center" $align="center">
        <Link to="/counter">
          <StyledButton disabled={isValueInvalid} onClick={setButtonOnClick}>
            set
          </StyledButton>
        </Link>
      </FlexWrapper>
    </>
  )
}

const AdaptiveFlexWrapper = styled(FlexWrapper)`
  @media (max-width: 420px) {
    align-items: center;
  }
`
