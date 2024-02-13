import styled from "styled-components"
import { Counter } from "./components/Counter"
import { CounterSettings } from "./components/CounterSettings"
import { useState } from "react"

function App() {
  const [value, setValue] = useState(0)
  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(5)
  const [messageText, setMessageText] = useState("")
  const [error, setError] = useState(false)

  const incValue = () => {
    setValue(value + 1)
  }

  const resetCounter = () => {
    setValue(startValue)
  }

  const changeStartValue = (value: number) => {
    setStartValue(value)
    setValue(value)
  }

  const changeMaxValue = (value: number) => {
    console.log(setMaxValue(value))
  }

  const changeMessageText = (value: string, error: boolean) => {
    setMessageText(value)
    setError(error)
  }

  return (
    <StyledApp>
      <CounterSettings
        value={value}
        startValue={startValue}
        maxValue={maxValue}
        changeStartValue={changeStartValue}
        changeMaxValue={changeMaxValue}
        changeMessageText={changeMessageText}
      />
      <Counter
        value={messageText || value}
        startValue={startValue}
        maxValue={maxValue}
        incValue={incValue}
        resetCounter={resetCounter}
        messageText={messageText}
        error={error}
      />
    </StyledApp>
  )
}

export default App

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`
