import styled from "styled-components"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCounterStateTC } from "./redux/counterReducer/counterReducer"
import { ThunkDispatch } from "redux-thunk"
import { AppRootState, RootAction } from "./redux/store"
import { FlexWrapper } from "./components/FlexWrapper"
import { CounterPage } from "./pages/CounterPage/CounterPage"

function App() {
  const dispatch = useDispatch<ThunkDispatch<AppRootState, unknown, RootAction>>()

  useEffect(() => {
    dispatch(setCounterStateTC())
  }, [])

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
