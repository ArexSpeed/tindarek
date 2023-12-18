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

const initialState: UserState = {
  user: {
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
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { addUserData } = userSlice.actions;

export const selectedUserData = (state: RootState) => state.user;

export default userSlice.reducer;
