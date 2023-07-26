// apiContext.js
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

// Create the context
const ApiContext = createContext();

// Create a custom hook to use the context easily
export const useApiContext = () => useContext(ApiContext);

// Create the context provider
export const ApiProvider = ({ children }) => {
  // Replace 'YOUR_API_BASE_URL' with the base URL of your Node.js API
  const apiUrl = 'http://localhost:5000';

  // Function to make API requests
  const apiRequest = async (method, endpoint, body = null) => {
    try {
      const response = await axios({
        method,
        url: `${apiUrl}/${endpoint}`,
        headers: {
          'Content-Type': 'application/json',
        },
        // Convert body to JSON string if provided
        data: body ? JSON.stringify(body) : null,
      });
      return response.data;
    } catch (error) {
      throw new Error('API Request Failed');
    }
  };

  // Store the API functions and data in the context state
  const [apiState] = useState({
    apiRequest,
  });

  return <ApiContext.Provider value={apiState}>{children}</ApiContext.Provider>;
};
