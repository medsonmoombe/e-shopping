import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
// import productReducer from "./products";

const rootReducer = combineReducers({
   auth: authReducer,
   // products: productReducer,
});

const store = configureStore({
 reducer: rootReducer,
})

export default store;