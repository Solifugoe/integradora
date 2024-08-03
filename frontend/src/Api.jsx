import axios from 'axios';

// Define la URL base de la API aquí
export const API_URL = 'https://oaxacapower.org';  // Asegúrate de incluir 'https://'

// Crear una instancia de axios con configuración por defecto
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Ejemplo de función que utiliza el cliente axios
export const getLoginData = async () => {
    try {
        const response = await apiClient.get('/login');
        return response.data;
    } catch (error) {
        console.error('Error fetching login data:', error);
    }
};

export const getDatosUsuario = async () => {
    try {
        const response = await apiClient.get('/datos_usuario');
        return response.data;
    } catch (error) {
        console.error('Error fetching datos_usuario:', error);
    }
};

export const getEmocionesNegativas = async () => {
    try {
        const response = await apiClient.get('/emociones_negativas');
        return response.data;
    } catch (error) {
        console.error('Error fetching emociones_negativas:', error);
    }
};

export const getHistorialEmocionesMensuales = async () => {
    try {
        const response = await apiClient.get('/historial_emociones_mensuales');
        return response.data;
    } catch (error) {
        console.error('Error fetching historial_emociones_mensuales:', error);
    }
};

export const registerUser = async (fullname, email, password, codigo) => {
    try {
        const response = await apiClient.post('/register', {
            fullname,
            email,
            password,
            codigo
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await apiClient.post('/login', { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default API_URL;