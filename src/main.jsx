import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import App from './App.jsx';

import { CartProvider } from './contexts/cart.context.jsx';
import { store } from './store/store.js';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
          <CartProvider>
            <App />
          </CartProvider>
    </Provider>
  </React.StrictMode>,
)
