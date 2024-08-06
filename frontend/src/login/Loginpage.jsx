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
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo: email, contrasena: password }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`); // Manejar respuestas que no sean 2xx
      }

      const data = await response.json(); // Parsear respuesta como JSON
      console.log('User signed in:', data);

      Swal.fire({
        icon: 'success',
        title: 'Sesión Iniciada',
        text: 'Has iniciado sesión correctamente',
      });
      navigate('/'); // Redirige al inicio o a la ruta deseada
    } catch (error) {
      console.error('Error signing in:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: 'Ha ocurrido un error. Inténtalo de nuevo.', // Mensaje de error genérico
      });
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
            id="correo"
            name="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="contrasena"
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
};

export default Loginpage;
