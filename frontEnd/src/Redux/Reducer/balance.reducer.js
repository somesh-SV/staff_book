import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balances: {},
};

export const balanceReducer = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setBalance: (state, action) => {
      const { staffId, balance } = action.payload;
      state.balances = {
        ...state.balances,
        [staffId]: balance,
      };
    },
  },
});

export const selectBalanceState = (state) => state.balance.balances;

export const { setBalance } = balanceReducer.actions;

export default balanceReducer.reducer;
