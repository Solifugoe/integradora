import axios from 'axios';

// Define la URL base de la API aquí, o importa si ya está definida en otro archivo
const API_URL = 'oaxacapower.org';  

export const checkUserLoggedIn = async () => {
    try {
        const response = await axios.get(`${API_URL}/isLoggedIn`);
        return response.data; // Esto debería devolver algo como { loggedIn: true } o { loggedIn: false }
    } catch (error) {
        console.error('Error checking logged in status:', error);
        return { loggedIn: false }; // Asumir no logueado en caso de error
    }
};
