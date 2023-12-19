import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
type User = {
  id: string;
  nickname: string;
  firstName: string;
  lastName: string;
  profession: string;
  location: string;
  dateOfBirth: string;
  sex: string;
  shortDescription: string;
  description: string;
  imageSrc: string;
};
type matchState = {
  users: User[];
  option: "my" | "followers";
};

const initialState: matchState = {
  users: [],
  option: "my",
};

export const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {
    addMatch: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    toggleOption: (state, action: PayloadAction<"my" | "followers">) => {
      state.option = action.payload;
    },
  },
});

export const { addMatch, toggleOption } = matchSlice.actions;

export const selectedMatchUsers = (state: RootState) => state.match.users;
export const selectedMatchOption = (state: RootState) => state.match.option;

export default matchSlice.reducer;
