import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 isLoggedIn: false,
 userName: null,
 email: null,
 userId: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER:(state, action) => {
     const { email, userName, userId} = action.payload;
     state.isLoggedIn = true;
     state.userName = userName
     state.userId =userId
     state.email = email
    },
    REMOVE_USER: (state, action) => {
        state.isLoggedIn = false;
        state.userName = null
        state.userId = null
        state.email = null
    }
  }
});

export const {SET_ACTIVE_USER, REMOVE_USER} = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserName = (state) => state.auth.userName;
export const selectUserId = (state) => state.auth.userId;

export default authSlice.reducer