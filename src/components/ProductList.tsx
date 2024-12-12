
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store';

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return response.json();
};

const ProductList = () => {
  const { data: products = [] } = useQuery(['products'], fetchProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div>
      <h1>Product Listing</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <img src={product.image} alt={`Image of ${product.title}`} />
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;