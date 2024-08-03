import React, { useState } from 'react';
import '../register/registerpage.css';
import { API_URL } from '../Api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Registerpage = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Limpiar errores anteriores
    
    try {
      // Cambia la URL y los parámetros según los requisitos de tu API
      const response = await API_URL.post('/register', {
        fullname,
        email,
        password,
      });
      console.log('User registered:', response.data); // Asume que la API devuelve datos relevantes
      registro(); // Llama a la función de registro exitoso
    } catch (error) {
      setError(error.response.data.message || 'Error al registrarse'); // Asume que la API devuelve un mensaje de error
      console.error('Error registering user:', error);
    }
  };

  const registro = () => {
    Swal.fire({
      title: '¡Registro exitoso!',
      text: 'Tu cuenta ha sido creada con éxito',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then(() => {
      navigate('/'); // Redirige al inicio o a la página que desees
    });
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Registro</h1>
        {error && <p className="error-message" style={{color: "red"}}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Tu nombre"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
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

          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Registerpage;
