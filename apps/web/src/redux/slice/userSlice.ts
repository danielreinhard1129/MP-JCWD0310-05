import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: number;
  email: string;
  username: string;
  role: string;
}

const initialState = {
  id: 0,
  username: "",
  email: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },

    logoutAction: (state) => {
      state.id = 0;
      state.username = "";
      state.email = "";
    },
  },
});


export const {loginAction, logoutAction} = userSlice.actions;
export default userSlice.reducer;