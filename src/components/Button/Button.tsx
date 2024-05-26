import s from "./Button.module.css"

type ButtonProps = {
  children: string
  disabled?: boolean
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={s.button}
    >
      {props.children}
    </button>
  )
}
