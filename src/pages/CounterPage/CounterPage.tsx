import { Navigate, Route, Routes } from "react-router-dom"
import { Container } from "../../components/Container"
import { CounterSettingsContainer } from "./CounterSettings/CounterSettingsContainer"
import { Counter } from "./Counter/Counter"

export const CounterPage = () => {
  return (
    <Container>
      <Routes>
        <Route path="/*" element={<Navigate to="/counter" />} />

        <Route path="/counter" element={<Counter />} />
        <Route path="/counter-settings" element={<CounterSettingsContainer />} />
      </Routes>
    </Container>
  )
}
