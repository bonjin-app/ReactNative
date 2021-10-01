import { LoginActions } from "./actions"
import { AppState } from "./AppState"


const initialState: AppState = {
  loggedIn: false,
  loggedUser: {
    name: '',
    email: '',
    password: '',
  }
}

export const rootReducer = (state: AppState = initialState, action: LoginActions) => {
    return state
}