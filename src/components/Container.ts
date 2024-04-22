import styled from "styled-components"
import { Theme } from "../styles/Theme"

export const Container = styled.div`
  min-width: 450px;
  border: 4px solid ${Theme.colors.accent};
  border-radius: 1rem;
  padding: 20px;
  @media (max-width: 450px) {
    min-width: unset;
    width: 100%;
  }
`
