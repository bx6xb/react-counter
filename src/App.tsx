import styled from "styled-components"
import { CounterContainer } from "./components/Counter/CounterContainer"
import { CounterSettingsContainer } from "./components/CounterSettings/CounterSettingsContainer"

function App() {
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
