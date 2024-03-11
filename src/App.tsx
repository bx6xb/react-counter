import styled from "styled-components"
// import { Counter } from "./components/Counter/Counter"
// import { CounterSettings } from "./components/CounterSettings/CounterSettings"
// import { useEffect, useState } from "react"
import { CounterContainer } from "./components/Counter/CounterContainer"
import { CounterSettingsContainer } from "./components/CounterSettings/CounterSettingsContainer"

// const INITIAL_CURRENT_VALUE = 0
// const INITIAL_START_VALUE = 0
// const INITIAL_MAX_VALUE = 5

function App() {
  // const [value, setValue] = useState(INITIAL_CURRENT_VALUE)
  // const [startValue, setStartValue] = useState(INITIAL_START_VALUE)
  // const [maxValue, setMaxValue] = useState(INITIAL_MAX_VALUE)
  // const [messageText, setMessageText] = useState("")
  // const [error, setError] = useState(false)

  // Functions
  // const incValue = () => {
  //   setValue(value + 1)
  // }

  // const resetCounter = () => {
  //   setValue(startValue)
  // }

  // // useEffect(resetCounter, [startValue])

  // const changeStartValue = (value: number) => {
  //   setStartValue(value) // reducer also changing current value after clicking on button
  //   setValue(value)
  // }

  // const changeMessageText = (value: string, error: boolean) => {
  //   setMessageText(value)
  //   setError(error)
  // }

  return (
    <StyledApp>
      <CounterSettingsContainer />
      <CounterContainer />
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
