import styled from "styled-components"
import { Counter } from "./components/Counter"
import { CounterSettings } from "./components/CounterSettings"
import { useState } from "react"

const INITIAL_CURRENT_VALUE = 0
const INITIAL_START_VALUE = 0
const INITIAL_MAX_VALUE = 5

function App() {
  const [value, setValue] = useState(INITIAL_CURRENT_VALUE)
  const [startValue, setStartValue] = useState(INITIAL_START_VALUE)
  const [maxValue, setMaxValue] = useState(INITIAL_MAX_VALUE)

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
    setMaxValue(value)
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

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

export default App
