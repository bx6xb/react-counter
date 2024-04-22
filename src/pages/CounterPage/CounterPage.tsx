import { Navigate, Route, Routes } from "react-router-dom"
import { Container } from "../../components/Container"
import { CounterContainer } from "./Counter/CounterContainer"
import { CounterSettingsContainer } from "./CounterSettings/CounterSettingsContainer"

export const CounterPage = () => {
  return (
    <Container>
      <Routes>
        <Route path="/*" element={<Navigate to="/counter" />} />

        <Route path="/counter" element={<CounterContainer />} />
        <Route path="/counter-settings" element={<CounterSettingsContainer />} />
      </Routes>
    </Container>
  )
}
