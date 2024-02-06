import { User } from './../user';
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as UserActions from "./user.actions";

// STATES
export interface UserState {
  maskUserName: boolean;
  loggedUser: User;
}

const initialState: UserState = {
  maskUserName: false,
  loggedUser: null
}

// SELECTORS
const getUserFeatureState = createFeatureSelector<UserState>("users");

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getLoggedUser = createSelector(
  getUserFeatureState,
  state => state.loggedUser
);


// REDUCER
export const userReducer = createReducer<UserState>(
  initialState,

  on(UserActions.maskUserName, (state): UserState => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  }),

  // on(UserActions.setLoggedUser, (state, action): UserState => {
  //   return {
  //     ...state,
  //     loggedUser: action.user
  //   };
  // })
);
