import { combineReducers } from "@reduxjs/toolkit";
import { usersReducer } from "./features/Users/users.slice";

const appReducer = combineReducers({
  users: usersReducer,
});

export const rootReducer = (state: any, action: never) => {
  return appReducer(state, action);
};
