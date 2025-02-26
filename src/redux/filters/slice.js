import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    price: null,
    mileage: {
      from: null,
      to: null,
    },
  },
  reducers: {
    setBrandFilter: (state, action) => {
      state.brand = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.price = action.payload;
    },
    setMileageFilter: (state, action) => {
      state.mileage = action.payload;
    },
    resetFilters: (state) => {
      state.brand = "";
      state.price = null;
      state.mileage = { from: null, to: null };
  },
  },
});

export const { setBrandFilter, setPriceFilter, setMileageFilter } = filtersSlice.actions;
export default filtersSlice.reducer;