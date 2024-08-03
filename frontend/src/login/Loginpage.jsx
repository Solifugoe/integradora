import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Swal from 'sweetalert2';
import '../login/loginpage.css';
import { API_URL } from '../Api';


export const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API_URL.post('/login', { email, password });
      console.log('User signed in:', response.data); // Asume que la respuesta incluye algún dato relevante
      Swal.fire({
        icon: 'success',
        title: 'Sesión Iniciada',
        text: 'Has iniciado sesión correctamente',
      });
      navigate('/'); // Redirige al inicio o a la ruta deseada
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: 'Inténtalo de nuevo',
      });
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Iniciar Sesion</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button type="submit">Iniciar Sesion</button>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
