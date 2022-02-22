import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjBlZTAyMzUzZDM3ZmU2NTQ2YjVlYzEiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjQ1NTAzNjA4LCJleHAiOjE2NDU1OTAwMDh9.B5AJC4wn_CQDYH58Djo0v7DqMwo0YodU8-zuZ3nH3nI';

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${token}` },
});
