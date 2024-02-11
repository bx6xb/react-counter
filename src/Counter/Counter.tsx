import { useState } from "react"
import { S } from "./CounterStyles"

type CounterPropsType = {
  maxValue: number
}

export const Counter = (props: CounterPropsType) => {
  const [value, setValue] = useState<number>(0)

  const onClickButtonHaandler = () => setValue(value + 1)

  const resetButton = () => setValue(0)

  const maxValueReached: boolean = value >= props.maxValue

  return (
    <S.StyledCounter>
      <S.CounterCurrentValue maxValueReached={maxValueReached}>{value}</S.CounterCurrentValue>
      <S.Buttons>
        <S.Button onClick={onClickButtonHaandler} disabled={maxValueReached}>
          inc
        </S.Button>
        <S.Button onClick={resetButton} disabled={value === 0}>
          reset
        </S.Button>
      </S.Buttons>
    </S.StyledCounter>
  )
}
