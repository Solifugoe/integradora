import axios from 'axios';

// Define la URL base de la API aquí, o importa si ya está definida en otro archivo
const API_URL = 'https://api2-plma.onrender.com';  // Asegúrate de no incluir la barra al final

// Función para verificar si el usuario está conectado
export const checkUserLoggedIn = async () => {
    try {
        const response = await axios.get(`${API_URL}/isLoggedIn`);
        return response.data; // Esto debería devolver algo como { loggedIn: true } o { loggedIn: false }
    } catch (error) {
        console.error('Error checking logged in status:', error);
        return { loggedIn: false }; // Asume que no está conectado si hay un error
    }
};

// Función para cerrar sesión del usuario
export const logout = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`);
        return response.data; // Maneja la respuesta según sea necesario
    } catch (error) {
        console.error('Error logging out:', error);
        throw error; // Propaga el error para manejarlo en el componente que llama
    }
};
