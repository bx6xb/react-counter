import styled from "styled-components"
import { Theme } from "../styles/Theme"
import { FlexWrapper } from "./FlexWrapper"
import { ChangeEvent } from "react"

type InputPropsType = {
  title: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  error?: boolean
}

export const Input = (props: InputPropsType) => {
  return (
    <FlexWrapper justify="space-between" align="center" wrap="wrap">
      <StyledLabel>{props.title}</StyledLabel>
      <StyledInput error={props.error} value={props.value || ""} onChange={props.onChange} />
    </FlexWrapper>
  )
}

const StyledInput = styled.input.attrs({ type: "number" })<{ error?: boolean }>`
  height: 40px;
  border: 4px solid ${(p) => (p.error ? "red" : Theme.colors.accent)};
  color: ${(p) => (p.error ? "red" : "")};
  border-radius: 4px;
  max-width: 200px;
  text-align: center;
  font-size: 20px;
  outline: none;
`

const StyledLabel = styled.label`
  margin-right: 20px;
  flex-shrink: 0;
`
