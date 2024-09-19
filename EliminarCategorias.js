import React, { useState } from 'react';

const EliminarCategoria = () => {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Categoría eliminada con éxito');
      } else {
        alert('Error al eliminar la categoría');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al eliminar la categoría');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Eliminar Categoría</h1>
      <p> elimina una categoría con el ID:</p>
      <form onSubmit={handleDelete}>
        <div className="form-group">
          <label htmlFor="id">ID de la Categoría:</label>
          <input
            type="text"
            className="form-control"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">Eliminar</button>
      </form>
    </div>
  );
};

export default EliminarCategoria;