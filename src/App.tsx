import { CounterPage } from "./pages/CounterPage/CounterPage"
import s from "./styles/App.module.css"

function App() {
  return (
    <div className={s.appWrapper}>
      <CounterPage />
    </div>
  )
}

export default App
