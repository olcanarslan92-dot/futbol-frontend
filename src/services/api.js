const BASE_URL = 'https://futbol-api-backend.onrender.com/api';

export const getLeagues = async () => {
  const res = await fetch(`${BASE_URL}/leagues`);
  const data = await res.json();
  return data;
};