import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/User/Login';
import ProductList from './components/Product/ProductList';
import ShoppingCart from './components/Cart/ShoppingCart';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={() => <Login onLogin={setUser} />} />
            {user ? <Route path="/products" component={ProductList} /> : <Redirect to="/login" />}
            <Route path="/cart" component={ShoppingCart} />
          </Switch>
        </Router>
      </Provider>
    </I18nextProvider>
  );
};

export default App;