import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
type User = {
  id: string;
  nickname: string;
  firstName: string;
  lastName: string;
  profession: string;
  location: string;
  birth: string;
  sex: string;
  shortDescription: string;
  description: string;
  imageSrc: string;
};

type UserState = {
  user: User;
};

const userDataStorage: User =
  localStorage.getItem("userData") !== null
    ? JSON.parse(localStorage.getItem("userData")!)
    : [];

const initialState: UserState = {
  user: userDataStorage,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      localStorage.setItem("userData", JSON.stringify({}));
      state.user = {
        id: "",
        nickname: "",
        birth: "",
        description: "",
        firstName: "",
        imageSrc: "",
        lastName: "",
        location: "",
        profession: "",
        sex: "",
        shortDescription: "",
      };
    },
  },
});

export const { addUserData, logoutUser } = userSlice.actions;

export const selectedMyUserData = (state: RootState) => state.user;

export default userSlice.reducer;
