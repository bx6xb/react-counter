import { AppRootState } from "../redux/store"

export const localStorageAPI = {
  load(): AppRootState | undefined {
    const state = localStorage.getItem("react-counter-app-state")
    if (state) {
      return JSON.parse(state)
    }
    return undefined
  },
  save(state: AppRootState) {
    localStorage.setItem("react-counter-app-state", JSON.stringify(state))
  },
}
