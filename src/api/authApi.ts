import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL || '/api';


export const refreshAccessToken = async (refreshToken: string) => {
  const response = await axios.post(`${API_URL}/auth/refresh`, {
    token: refreshToken,
  });
  return response.data; // Expected { accessToken, refreshToken }
};

export const signup = async (data: any) => {
  const response = await axios.post(`${API_URL}/auth/signup`, data, {
    withCredentials: true,
  });
  return response.data;
};

export const login = async (data: any) => {
  const response = await axios.post(`${API_URL}/auth/login`, data, {
    withCredentials: true,
  });
  return response.data;
};
