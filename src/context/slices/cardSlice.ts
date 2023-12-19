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

type cardState = {
  currentUser: User;
};

const initialState: cardState = {
  currentUser: {
    id: "",
    nickname: "",
    firstName: "",
    lastName: "",
    profession: "",
    location: "",
    birth: "",
    sex: "",
    shortDescription: "",
    description: "",
    imageSrc: "",
  },
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = cardSlice.actions;

export const selectedCurrentUser = (state: RootState) => state.card.currentUser;

export default cardSlice.reducer;
