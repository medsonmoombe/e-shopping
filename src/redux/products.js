// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     products : {
//         title:"",
//         image:"",
//         brand:"",
//         category:"",
//         description: "",
//     }
// }

// const products = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     GET_PRODUCTS : (state, action) => {
//         const { title, brand, image, category, description} = action.payload;
//         state.products.brand = brand
//         state.products.category = category
//         state.products.description = description
//         state.products.image = image
//         state.products.title = title
//     }
//   }
// });

// export const { GET_PRODUCTS} = products.actions
// export const Products = (state) => state.products;

// export default products.reducer