import { createAction, props } from "@ngrx/store";
import { User } from "../../user";

export const maskUserName = createAction(
  "[User] Mask User Name"
);

// export const setLoggedUser = createAction(
//   "[User] Set Logged User",
//   props<{ user: User}>()
// );
