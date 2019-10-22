export enum AuthActionTypes {
  SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
  SIGNIN_FAIL = 'SIGNIN_FAIL',
  SIGNIN_REQUIRED = 'SIGNIN_REQUIRED',
  CLEAR_ALERTS = 'CLEAR_ALERTS',
  SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS',
  SIGNOUT_FAIL = 'SIGNOUT_FAIL'
}

export interface AuthState {
  currentUser: User | null
  alerts: AlertsArray
}

export interface User {
  id: String
  email: String
}

export type AlertsArray = Alert[]

type Alert = {
  type: string
  message: string
}
