import axios from 'axios';

const API_URL = 'https://car-rental-api.goit.global/api';

export const fetchCars = async (filters, page) => {
  const response = await axios.get(`${API_URL}/cars`, {
    params: { ...filters, page },
  });
  return response.data;
};

export const fetchCarDetails = async (id) => {
  const response = await axios.get(`${API_URL}/cars/${id}`);
  return response.data;
};

export const rentCar = async (carId, rentalData) => {
  const response = await axios.post(`${API_URL}/rentals`, { carId, ...rentalData });
  return response.data;
};