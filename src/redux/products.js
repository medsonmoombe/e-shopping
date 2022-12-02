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
  name: "products",
  initialState,
  reducers: {
    GET_PRODUCTS : (state, action) => {
        console.log(action.payload);
        const { title, brand, image, category, description, cart, price} = action.payload;
        state.products.brand = brand
        state.products.category = category
        state.products.description = description
        state.products.image = image
        state.products.title = title
        state.products.cart = cart
        state.products.price = price
    }
  }
});

export const { GET_PRODUCTS} = products.actions
export const Products = (state) => state.products;

export default products.reducer