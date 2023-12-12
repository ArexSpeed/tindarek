import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type cardState = {
  currentUser: string | null;
};

const initialState: cardState = {
  currentUser: null,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = cardSlice.actions;

export const selectedCurrentUser = (state: RootState) => state.card.currentUser;

export default cardSlice.reducer;
