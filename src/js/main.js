// Import the API function
import { fetchMarvelData } from '../api/marvelAPI.js';

// Function to test the API call
const testMarvelApi = async () => {
  try {
    // Replace 'characters' with the desired endpoint
    const data = await fetchMarvelData('characters');
    console.log('API Response:', data);
  } catch (error) {
    console.error('API Call Failed:', error);
  }
};

// Call the test function
testMarvelApi();
