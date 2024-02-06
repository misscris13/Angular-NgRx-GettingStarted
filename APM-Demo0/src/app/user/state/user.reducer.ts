import { createAction, createReducer, on } from "@ngrx/store";
import { User } from "../user";

export interface UserState {
  maskUserName: boolean;
  loggedUser: User;
}

export const userReducer = createReducer<UserState>(
  { maskUserName: false } as UserState,

  on(createAction( '[User] Mask User Name'), (state): UserState => {
    console.log('original state: ' + JSON.stringify(state));
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
