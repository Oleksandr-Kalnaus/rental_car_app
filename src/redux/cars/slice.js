import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCarDetails, fetchCars } from "./operations.js";
import { selectFilter, selectCars } from "./selectors.js";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    loading: false,
    error: null,
    totalCars: 0,
    totalPages: 1,

    carDetails: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.cars || [];
        state.totalCars = action.payload.totalCars || 0;
        state.totalPages = action.payload.totalPages || 1;
      })
      .addCase(fetchCars.rejected, handleRejected)

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
      });
  },
});

const handlePending = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, filters) => {
    if (!Array.isArray(cars)) return [];
    const { brand, price, mileageFrom, mileageTo } = filters;

    return cars.filter((car) => {
      const brandMatch = car.brand
        ? car.brand.toLowerCase().includes(brand.toLowerCase())
        : false;

      const priceMatch = price
        ? parseFloat(car.rentalPrice) <= parseFloat(price)
        : true;

      const mileageFromMatch = mileageFrom
        ? car.mileage >= parseFloat(mileageFrom)
        : true;
      const mileageToMatch = mileageTo
        ? car.mileage <= parseFloat(mileageTo)
        : true;

      return brandMatch && priceMatch && mileageFromMatch && mileageToMatch;
    });
  }
);

export default carsSlice.reducer;
