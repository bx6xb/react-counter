import styled from "styled-components"
import { CounterContainer } from "./components/Counter/CounterContainer"
import { CounterSettingsContainer } from "./components/CounterSettings/CounterSettingsContainer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCounterStateTC } from "./redux/counterReducer/counterReducer"
import { ThunkDispatch } from "redux-thunk"
import { AppRootStateType, RootActionType } from "./redux/store"

function App() {
  const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, RootActionType>>()

  useEffect(() => {
    dispatch(setCounterStateTC())
  }, [])

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
