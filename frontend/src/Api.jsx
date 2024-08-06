import axios from 'axios';

// Define la URL base de la API aquí
export const API_URL = 'https://api2-plma.onrender.com/';  // Asegúrate de incluir 'https://'

// Crear una instancia de axios con configuración por defecto
export const apiClient = axios.create({
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
        console.error('Error fetching login data:', error.response || error.message);
        throw error; // Rethrow the error to handle it elsewhere
    }
};

export const getDatosUsuario = async () => {
    try {
        const response = await apiClient.get('/datos_usuario');
        return response.data;
    } catch (error) {
        console.error('Error fetching datos_usuario:', error.response || error.message);
        throw error;
    }
};

export const getEmocionesNegativas = async () => {
    try {
        const response = await apiClient.get('/emociones_negativas');
        return response.data;
    } catch (error) {
        console.error('Error fetching emociones_negativas:', error.response || error.message);
        throw error;
    }
};

export const getHistorialEmocionesMensuales = async () => {
    try {
        const response = await apiClient.get('/historial_emociones_mensuales');
        return response.data;
    } catch (error) {
        console.error('Error fetching historial_emociones_mensuales:', error.response || error.message);
        throw error;
    }
};

export const registerUser = async (correo, contrasena, nombre) => {
    try {
        const response = await apiClient.post('/register', {
            correo,
            contrasena,
            nombre
        });
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error.response || error.message);
        throw error;
    }
};

export const loginUser = async (correo, contrasena) => {
    try {
        const response = await apiClient.post('/login', { correo, contrasena });
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error.response || error.message);
        throw error;
    }
};
