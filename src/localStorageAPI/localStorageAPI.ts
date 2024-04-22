import { AppRootStateType } from "../redux/store"

export const localStorageAPI = {
  load(): AppRootStateType | undefined {
    const state = localStorage.getItem("react-counter-app-state")
    if (state) {
      return JSON.parse(state)
    }
    return undefined
  },
  save(state: AppRootStateType) {
    localStorage.setItem("react-counter-app-state", JSON.stringify(state))
  },
}
