// ApiClient.tsx
// This file defines a reusable Axios instance for making API calls in the application.

import axios from 'axios';

const ApiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api/', // Base URL for API requests.
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 50000, // Set a timeout of 5 seconds for requests.
});

export default ApiClient;
