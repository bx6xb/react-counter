import { createGlobalStyle } from "styled-components"
import { Theme } from "./Theme"

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${Theme.colors.main};
    color: ${Theme.colors.accent};
    min-width: 320px;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
  }
  button {
    cursor: pointer;
    border: unset;
  }
`
