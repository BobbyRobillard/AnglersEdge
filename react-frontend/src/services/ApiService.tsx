// ApiService.tsx
// This file provides service functions for interacting with the API to retrieve fish-related data.

import ApiClient from './ApiClient'; // Import the configured Axios client for API requests.
import { Fish } from './Types'; // Import the TypeScript type definition for Fish objects.

// Fetch a list of fish from the API.
// The function returns an array of Fish objects after mapping and restructuring the API response.
export const fetchFish = async (): Promise<Fish[]> => {
  try {
    // Make a GET request to the '/fish/' endpoint to retrieve fish data.
    const response = await ApiClient.get('/fish/');

    // Map the raw API response to match the expected Fish object structure.
    return response.data.map((item: any) => ({
      id: item.id, // Unique identifier for the fish.
      species: item.species, // Name of the species.
      bait: item.bait || [], // List of bait associated with the fish, defaulting to an empty array.
      food: item.food || [], // List of food sources for the fish, defaulting to an empty array.
      structure: item.structure || [], // List of structures associated with the fish, defaulting to an empty array.
      locations: item.locations || [], // List of locations where the fish can be found, defaulting to an empty array.
      trends: item.trends || [], // List of trends related to the fish, defaulting to an empty array.
      techniques: item.techniques || [], // List of techniques for catching the fish, defaulting to an empty array.
      tutorial_video: item.tutorial_video || '', // URL for a tutorial video, defaulting to an empty string if not available.
    }));
  } catch (error) {
    // Log the error to the console for debugging purposes.
    console.error('Error fetching fish data:', error);

    // Throw a new error with a user-friendly message for the caller to handle.
    throw new Error('Failed to fetch fish data. Please try again later.');
  }
};
