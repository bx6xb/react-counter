import styled from "styled-components"
import { Theme } from "../styles/Theme"
import { Font } from "../styles/Font"

const StyledCounter = styled.div`
  max-width: 400px;
  width: 100%;
  border: 4px solid ${Theme.colors.accent};
  border-radius: 1rem;
  padding: 20px;
`

const CounterCurrentValue = styled.div<{ maxValueReached: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: ${(p) => (p.maxValueReached ? "red" : `${Theme.colors.main}`)};
  background-color: ${Theme.colors.accent};
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 1rem;
`

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border: 4px solid ${Theme.colors.accent};
  border-radius: 1rem;
  padding: 20px;
`

const Button = styled.button`
  background-color: ${Theme.colors.accent};
  min-width: 40%;
  border-radius: 1rem;
  font-size: 50px;
  padding: 10px;
  ${Font("1920", "320", "50", "35")}
  &:disabled {
    user-select: none;
    opacity: 0.5;
  }
`

export const S = { StyledCounter, CounterCurrentValue, Buttons, Button }
