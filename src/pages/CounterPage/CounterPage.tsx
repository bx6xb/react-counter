import { Navigate, Route, Routes } from "react-router-dom"
import { Container } from "../../components/Container"
import { Counter } from "./Counter/Counter"
import { CounterSettings } from "./CounterSettings/CounterSettings"

export const CounterPage = () => {
  return (
    <Container>
      <Routes>
        <Route path="/*" element={<Navigate to="/counter" />} />

        <Route path="/counter" element={<Counter />} />
        <Route path="/counter-settings" element={<CounterSettings />} />
      </Routes>
    </Container>
  )
}
