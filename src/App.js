import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching the categories:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Categories</h1>
      <div className="row">
        {categories.map(category => (
          <div key={category.id} className="col-md-4 mb-4">
            <div className="card h-100 text-center">
              <img
                src={category.image}
                alt={category.name}
                className="card-img-top"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;