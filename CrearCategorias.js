import React, { useState } from 'react';

const CrearCategoria = () => {
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevaCategoria = {
      name: nombre,
      image: imagen,
    };

    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevaCategoria),
      });

      if (response.ok) {
        alert('Categoría creada con éxito');
      } else {
        alert('Error al crear la categoría');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al crear la categoría');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Crear Nueva Categoría</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagen">Imagen URL:</label>
          <input
            type="text"
            className="form-control"
            id="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
};

export default CrearCategoria;