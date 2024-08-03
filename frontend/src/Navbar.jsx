import React, { useState, useEffect } from 'react';
import { checkUserLoggedIn } from './apiHelp';  // Asegúrate de importar correctamente

export const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const verifyLogin = async () => {
            const result = await checkUserLoggedIn();
            if (result.loggedIn) {
                // Aquí puedes poner más lógica si tienes más datos del usuario, por ejemplo, su nombre
                setUser({ email: 'usuario@ejemplo.com' }); // Simula que el usuario está logueado
            } else {
                setUser(null);
            }
        };

        verifyLogin();
    }, []);

  const handleSignOut = () => {
    // Llamada a tu API para cerrar sesión
    logout().then(() => {
      setUser(null);
      setIsOpen(false);
      navigate('/login'); // Redirecciona a la página de login
    }).catch(error => {
      console.error('Error signing out: ', error);
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    checkUserLoggedIn(); // Verificar el estado del usuario al cargar el componente

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
            <span className="navbar-username">Hola, {user.email} !</span>
            <button className="navbar-signout" onClick={handleSignOut}>Cerrar Sesion</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="navbar-signin" onClick={closeMenu}>Iniciar Sesion</Link>
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
