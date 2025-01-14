import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/favorites">Favs</Link>
      <Link to="/">Home</Link>
      <Link to="/form">Contacto</Link>
      <button className="ButtonNavbar" onClick={toggleTheme}>
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;