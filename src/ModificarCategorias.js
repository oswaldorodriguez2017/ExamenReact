import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModificarCategorias = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://api.escuelajs.co/api/v1/categories/3', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: categoryName })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Categoría modificada exitosamente');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Hubo un error al modificar la categoría');
    });
  };

  return (
    <div className="container mt-5">
      <h2>Modificar Categoría</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="categoryName">Nombre de la Categoría</label>
          <input
            type="text"
            className="form-control"
            id="categoryName"
            placeholder="Ingrese el nuevo nombre"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default ModificarCategorias;