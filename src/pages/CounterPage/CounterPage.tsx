import { Navigate, Route, Routes } from "react-router-dom"
import { Counter } from "./Counter/Counter"
import { CounterSettings } from "./CounterSettings/CounterSettings"
import s from "./CounterPage.module.css"

export const CounterPage = () => {
  return (
    <div className={s.container}>
      <Routes>
        <Route path="/*" element={<Navigate to="/counter" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counter-settings" element={<CounterSettings />} />
      </Routes>
    </div>
  )
}
