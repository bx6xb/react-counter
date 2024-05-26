import styled from "styled-components"
import { FlexWrapper } from "./components/FlexWrapper"
import { CounterPage } from "./pages/CounterPage/CounterPage"

function App() {
  return (
    <StyledApp>
      <FlexWrapper $justify="center" $wrap="wrap" $align="center" $gap="50px">
        <CounterPage />
      </FlexWrapper>
    </StyledApp>
  )
}

const StyledApp = styled.div`
  height: 100vh;
`

export default App
