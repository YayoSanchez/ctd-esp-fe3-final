import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const ThemeContext = createContext();

// Proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Cargar el tema inicial desde localStorage, o establecer 'light' por defecto
    return localStorage.getItem("theme") || "light";
  });

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Guardar el tema actual en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};