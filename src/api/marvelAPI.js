// Access environment variables
const API_KEY = 'f9bde80f6b1ced07ded8d00810b72e7e'
const BASE_URL = 'https://gateway.marvel.com/v1/public/'


// Function to fetch data from the Marvel API
export const fetchMarvelData = async (endpoint, params = {}) => {
  // Construct the URL with parameters
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.search = new URLSearchParams({ apikey: API_KEY, ...params });

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
