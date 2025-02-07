import { createSlice } from "@reduxjs/toolkit";
import { productImages } from "./product.utils";

const initialState = {
  mainImage: productImages[0].image,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setMainImage: (state, action) => {
      state.mainImage = action.payload;
    },
  },
});

export const productReducer = productSlice.reducer;
const productActions = productSlice.actions;
export default productActions;
