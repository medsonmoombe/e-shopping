import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from "./slice/authSlice";
import cartReducer from "./cartSlice";
import productReducer from "./products";



const persistConfig = {
   key: 'root',
   storage,
 }

const rootReducer = combineReducers({
   auth: authReducer,
   products: cartReducer,
   all: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
   reducer: persistedReducer
})
// export const persistor = persistStore(store)
export default store;