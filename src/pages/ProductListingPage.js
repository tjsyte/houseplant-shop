import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

// Sample product images
const products = [
  { id: 1, name: 'Aloe Vera', price: 20, image: 'https://via.placeholder.com/200', category: 'Succulents' },
  { id: 2, name: 'Ficus', price: 25, image: 'https://via.placeholder.com/200', category: 'Indoor' },
  { id: 3, name: 'Cactus', price: 15, image: 'https://via.placeholder.com/200', category: 'Succulents' },
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-listing-page">
      <h2>Product Listing</h2>
      <div className="product-categories">
        {['Succulents', 'Indoor', 'Outdoor'].map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <div className="products">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
