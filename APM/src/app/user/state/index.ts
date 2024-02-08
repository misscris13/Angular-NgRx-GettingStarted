import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

const getUserFeatureState = createFeatureSelector<UserState>("users");

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getLoggedUser = createSelector(
  getUserFeatureState,
  state => state.loggedUser
);
