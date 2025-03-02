import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (
    {
      page = 1,
      brand = "",
      rentalPrice = "",
      minMileage = "",
      maxMileage = "",
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.get("/cars", {
        params: {
          page: String(page),
          brand: brand || "",
          rentalPrice: rentalPrice ? String(rentalPrice) : "",
          minMileage: minMileage ? String(minMileage) : "",
          maxMileage: maxMileage ? String(maxMileage) : "",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarDetails = createAsyncThunk(
  "cars/fetchCarDetails",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarsBrands = createAsyncThunk(
  "cars/fetchCarsBrands",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/brands`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
