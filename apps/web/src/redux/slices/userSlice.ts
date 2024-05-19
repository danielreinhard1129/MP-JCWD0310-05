import { User } from "@/types/user.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Pick<User, "id"| "username" |"email"|"role"> = {
  id: 0,
  username: "",
  email: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.role = action.payload.role
    },

    logoutAction: (state) => {
      state.id = 0;
      state.username = "";
      state.email = "";
      state.role=""
    },
  },
});
export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;