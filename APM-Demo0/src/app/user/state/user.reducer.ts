import { User } from '../user';
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as UserActions from "./actions/user.actions";

// REDUCER
export interface UserState {
  maskUserName: boolean;
  loggedUser: User;
}

const initialState: UserState = {
  maskUserName: false,
  loggedUser: null
}

export const userReducer = createReducer<UserState>(
  initialState,

  on(UserActions.maskUserName, (state): UserState => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
