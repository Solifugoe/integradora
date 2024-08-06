import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ensure you import Link and useNavigate correctly
import { checkUserLoggedIn, logout } from './apiHelp';  // Import your API helpers

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Ensure isOpen is defined
  const navigate = useNavigate(); // Use this hook for navigation

  useEffect(() => {
    const verifyLogin = async () => {
      const result = await checkUserLoggedIn();
      if (result.loggedIn) {
        setUser({ email: 'usuario@ejemplo.com' }); // Simulate user login
      } else {
        setUser(null);
      }
    };

    verifyLogin();
  }, []);

  const handleSignOut = async () => {
    try {
      await logout(); // Call your API to sign out
      setUser(null);
      setIsOpen(false);
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/images/logo2.png" alt="Logo" onClick={() => navigate('/')} />
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Inicio</Link>
        <Link to="/graficas" onClick={closeMenu}>Graficas</Link>
        {user ? (
          <div className={`navbar-user ${isOpen ? '' : 'desktop'}`}>
            <span className="navbar-username">Hola, {user.email}!</span>
            <button className="navbar-signout" onClick={handleSignOut}>Cerrar Sesión</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="navbar-signin" onClick={closeMenu}>Iniciar Sesión</Link>
            <Link to="/register" className="navbar-signup" onClick={closeMenu}>Registrarse</Link>
          </>
        )}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
