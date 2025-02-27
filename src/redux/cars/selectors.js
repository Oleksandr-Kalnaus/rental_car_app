export const selectCars = (state) => state.cars.items;
export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;

export const selectFilter = (state) => state.filters;

export const selectTotalCars = (state) => state.cars.totalCars;
export const selectTotalPages = (state) => state.cars.totalPages;

export const selectCarDetails = (state) => state.cars.carDetails;
