import styled from "styled-components"
import { Theme } from "../styles/Theme"
import { Font } from "./Font"

export const StyledButton = styled.button`
  background-color: ${Theme.colors.accent};
  color: ${Theme.colors.main};
  border-radius: 1rem;
  padding: 10px 20px;
  ${Font("1920", "320", "50", "35")};
  &:disabled {
    user-select: none;
    opacity: 0.5;
  }
`
