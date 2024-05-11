import styled from "styled-components"
import { Theme } from "../styles/Theme"
import { FlexWrapper } from "./FlexWrapper"
import { ChangeEvent } from "react"

type InputProps = {
  title: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  isError?: boolean
}

export const Input = (props: InputProps) => {
  return (
    <FlexWrapper $justify="center" $align="center" $wrap="wrap">
      <StyledLabel>{props.title}</StyledLabel>
      <StyledInput $isError={props.isError} value={props.value || ""} onChange={props.onChange} />
    </FlexWrapper>
  )
}

type StyledInputProps = {
  $isError?: boolean
}

const StyledInput = styled.input.attrs({ type: "number" })<StyledInputProps>`
  height: 40px;
  border: 4px solid ${(p) => (p.$isError ? "red" : Theme.colors.accent)};
  color: ${(p) => (p.$isError ? "red" : "")};
  border-radius: 4px;
  max-width: 200px;
  text-align: center;
  font-size: 20px;
  outline: none;
`

const StyledLabel = styled.label`
  margin-right: 20px;
`
