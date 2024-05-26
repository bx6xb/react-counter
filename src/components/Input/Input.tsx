import { ChangeEvent } from "react"
import s from "./Input.module.css"

type InputProps = {
  title: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  isError?: boolean
}

export const Input = (props: InputProps) => {
  return (
    <label className={s.inputWrapper}>
      {props.title}
      <input
        className={s.input + (props.isError ? " " + s.error : "")}
        value={props.value || ""}
        onChange={props.onChange}
        type="number"
      />
    </label>
  )
}
