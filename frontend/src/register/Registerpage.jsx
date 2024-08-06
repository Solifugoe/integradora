import React, { useState } from 'react';
import '../register/registerpage.css';
import { registerUser } from '../Api';  // Import registerUser from your API helper
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
    setError(null); // Clear previous errors

    try {
        // Use registerUser for making API requests
        const response = await registerUser(fullname, email, password);
        console.log('User registered:', response); // Assume the API returns relevant data
        registro(); // Call the successful registration function
    } catch (error) {
        // Log the error response for more details
        if (error.response) {
            console.error('Error registering user:', error.response.data);
            setError(error.response.data.message || 'Error al registrarse');
        } else if (error.request) {
            console.error('Error registering user: No response received from server', error.request);
            setError('No response from server');
        } else {
            console.error('Error registering user:', error.message);
            setError('Error registering user');
        }
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
            required
          />
          
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Registerpage;
