import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  step: "itemsList",
  selectedAddress: "address1",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setSelectedAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(logInModal.logIn.pending, (state) => {
  //     state.submitting = true;
  //   });
  //   builder.addCase(logInModal.logIn.fulfilled, (state, action) => {
  //     state.submitting = false;
  //   });
  // },
});

export const cartReducer = cartSlice.reducer;
const cartSliceAction = cartSlice.actions;
export default cartSliceAction;
