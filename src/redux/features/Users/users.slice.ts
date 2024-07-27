import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersStateModel } from "./users.model";
import { IUserData } from "../../../interfaces/user";

const initialState: IUsersStateModel = {
  userList: [],
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUserList: (state, action: PayloadAction<IUserData[]>) => {
      state.userList = action.payload;
    },
  },
});

export const usersAction = userSlice.actions;
export const usersReducer = userSlice.reducer;
export default userSlice;
