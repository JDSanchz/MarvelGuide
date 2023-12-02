// Access environment variables
const API_KEY = import.meta.env.VITE_MARVEL_API_KEY;
const BASE_URL = import.meta.env.VITE_MARVEL_BASE_URL;

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
