import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { addToCart } from '././Store';


type Product = { 
  id: string;
  title: string;
  price: number;
  image: string;  
};

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  return response.json();
};

const ProductList: React.FC = () => {
  const { data: products = [], isLoading, error } = useQuery<Product[], Error>({
    queryKey: ['products'],  
    queryFn: fetchProducts    
  });

  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Product Listing</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <img src={product.image} alt={`${product.title}`} />
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;