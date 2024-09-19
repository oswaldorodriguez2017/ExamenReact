import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppConsulta from './AppConsultas';
import CrearCategorias from './CrearCategorias';
import ModificarCategorias from './ModificarCategorias';
import EliminarCategorias from './EliminarCategorias';
const Menu = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Menu</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/consulta">Consulta</Link>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/CrearCategoria">Crear Categoria</Link>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/ModificarCategorias">Modificar Categoria</Link>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/EliminarCategorias">Eliminar Categoria</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/consulta" element={<AppConsulta />} />
          <Route path="/CrearCategoria" element={<CrearCategorias />} />
          <Route path="/ModificarCategorias" element={<ModificarCategorias />} />
          <Route path="/EliminarCategorias" element={<EliminarCategorias />} />
       
        </Routes>
      </div>
    </Router>
  );
};

export default Menu;