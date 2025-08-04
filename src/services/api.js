const BASE_URL = 'https://futbol-api-backend.onrender.com';

export const getLeagues = async () => {
  const res = await fetch(`${BASE_URL}/leagues`);
  return res.json();
};

export const getLiveScores = async () => {
  const res = await fetch(`${BASE_URL}/live`);
  return res.json();
};