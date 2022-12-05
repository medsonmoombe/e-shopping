import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products : {
        title:null,
        price:0,
        image:"",
        brand:"",
        category:"",
        description: "",
        cart: false
    }
}

const products = createSlice({
  name: "product",
  initialState,
  reducers: {
    GET_PRODUCTS : (state, action) => {
      return action.payload
    },
    SET_INCART: (state, action) => {
      state.products.cart = true
    }
  }
});

export const { GET_PRODUCTS, SET_INCART} = products.actions
export const productsArr = (state) => state.products.products;

export default products.reducer