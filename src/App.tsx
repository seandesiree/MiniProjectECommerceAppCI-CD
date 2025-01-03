import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/Store';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login onLogin={setUser} />} />
            <Route path="/products" element={user ? <ProductList /> : <Navigate to="/login" />} />
            <Route path="/cart" element={<ShoppingCart />} /> 
            <Route path="/" element={<CreateUser />} />
          </Routes>
        </Router>
      </Provider>
    </I18nextProvider>
  );
}
export default App;