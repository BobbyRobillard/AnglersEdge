// ApiClient.tsx
// This file defines a reusable Axios instance for making API calls in the application.

import axios from 'axios';

const ApiClient = axios.create({
  baseURL: "https://anglingpros.com/api", // Base URL for API requests.
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 50000, // Set a timeout of 5 seconds for requests.
});

export default ApiClient;
