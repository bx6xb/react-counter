import { AppRootState } from "../redux/store"

export const load = () => {
  const state = localStorage.getItem("react-counter-app-state")
  if (state) {
    return JSON.parse(state)
  }
  return undefined
}
export const save = (state: AppRootState) => {
  localStorage.setItem("react-counter-app-state", JSON.stringify(state))
}
