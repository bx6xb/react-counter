import styled from "styled-components"
import { Counter } from "./Counter/Counter"

function App() {
  return (
    <StyledApp>
      <Counter maxValue={10} />
    </StyledApp>
  )
}

export default App

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
