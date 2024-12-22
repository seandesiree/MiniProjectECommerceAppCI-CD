import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/Store';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Router>
            <Route path="/login" Component={() => <Login onLogin={setUser} />} />
            {user ? <Route path="/products" Component={ProductList} /> : <Navigate to="/login" />}
            <Route path="/cart" Component={ShoppingCart} />  
        </Router>
      </Provider>
    </I18nextProvider>
  );
};

export default App;