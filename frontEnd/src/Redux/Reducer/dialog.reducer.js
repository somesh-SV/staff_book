import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  confirm: false,
};

export const dialogReducer = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    isOpen: (state, actions) => {
      state.open = actions.payload;
    },
    isClose: (state, actions) => {
      state.open = actions.payload;
    },
  },
});

export const selecteOpenState = (state) => state.dialog.open;

export const { isOpen, isClose, isConfirm } = dialogReducer.actions;

export default dialogReducer.reducer;
