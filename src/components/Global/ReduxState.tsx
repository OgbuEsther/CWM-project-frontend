import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { userData } from "../AllInterface/AllInterface";

interface loginClient {
  email: string;
  password: string;
}

const initialState = {
  Client: {} as userData | null,
  login: {} as loginClient | null,
};

const ReduxState = createSlice({
  name: "CWM",
  initialState,
  reducers: {
    registerClient: (state, { payload }: PayloadAction<userData>) => {
      state.Client = payload;
    },
    loginClients: (state, { payload }: PayloadAction<loginClient>) => {
      state.login = payload;
    },
  },
});

export const { registerClient, loginClients } = ReduxState.actions;

export default ReduxState.reducer;
