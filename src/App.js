import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
