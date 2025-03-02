import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  },
  reducers: {
    setFilter: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        if (action.payload[key] !== undefined && action.payload[key] !== "") {
          state[key] = action.payload[key];
        }
      });
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
