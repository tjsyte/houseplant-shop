import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="shopping-cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: ${totalCost}</p>
      </div>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleIncrease(item.id)}>Increase</button>
          <button onClick={() => handleDecrease(item.id)}>Decrease</button>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}

      <div className="cart-actions">
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
        <button>Checkout (Coming Soon)</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
