import { createSlice } from "@reduxjs/toolkit";
import { fetchCarDetails, fetchCars, fetchCarsBrands } from "./operations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    brands: [],
    loading: false,
    error: null,
    totalCars: 0,
    totalPages: 1,
    carDetails: null,
  },
  reducers: {
    resetCars: (state) => {
      state.items = [];
      state.totalCars = 0;
      state.totalPages = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        const newCars = action.payload.cars;

        const uniqueCars = newCars.filter(
          (newCar) =>
            !state.items.some((existingCar) => existingCar.id === newCar.id)
        );

        if (action.payload.page === 1) {
          state.items = uniqueCars;
        } else {
          state.items = [...state.items, ...uniqueCars];
        }

        state.totalCars = action.payload.totalCars;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.carDetails = action.payload;
      })
      .addCase(fetchCarDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarsBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarsBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchCarsBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCars } = carsSlice.actions;
export default carsSlice.reducer;
