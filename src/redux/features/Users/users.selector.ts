import { IUserData } from "../../../interfaces/user";
import { RootState } from "../../stroe";

export const usersSelector = {
  userList: (state: RootState): IUserData[] => state.users.userList,
};
