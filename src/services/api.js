const BASE_URL = 'http://localhost:5000/api';

export const getLeagues = async () => {
  const res = await fetch(`${BASE_URL}/leagues`);
  return res.json();
};

export const getLiveScores = async () => {
  const res = await fetch(`${BASE_URL}/live`);
  return res.json();
};