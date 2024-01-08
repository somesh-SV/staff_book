import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "../Reducer/dialog.reducer";

export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
  },
});
