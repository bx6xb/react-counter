import styled, { css } from "styled-components"
import { Theme } from "./Theme"

type FlexWrapperPropsType = {
  $justify?: string
  $align?: string
  $wrap?: string
  $direction?: string
  $padding?: string
  $border?: boolean
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(p) => p.$justify || "start"};
  align-items: ${(p) => p.$align || "start"};
  flex-wrap: ${(p) => p.$wrap || "nowrap"};
  flex-direction: ${(p) => p.$direction || "row"};
  padding: ${(p) => p.$padding || "0px"};
  ${(p) =>
    p.$border
      ? css`
          border: 4px solid ${Theme.colors.accent};
        `
      : ""};
  border-radius: 1rem;
  & + & {
    margin-top: 20px;
  }
`
