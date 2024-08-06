import axios from 'axios';

// Define la URL base de la API aquí, o importa si ya está definida en otro archivo
const API_URL = 'https://oaxacapower.org';  // Make sure to include the protocol (http or https)

// Function to check if the user is logged in
export const checkUserLoggedIn = async () => {
    try {
        const response = await axios.get(`${API_URL}/isLoggedIn`);
        return response.data; // This should return something like { loggedIn: true } or { loggedIn: false }
    } catch (error) {
        console.error('Error checking logged in status:', error);
        return { loggedIn: false }; // Assume not logged in if there's an error
    }
};

// Function to log out the user
export const logout = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`);
        return response.data; // Handle response as needed
    } catch (error) {
        console.error('Error logging out:', error);
        throw error; // Propagate error to handle it in the calling component
    }
};
