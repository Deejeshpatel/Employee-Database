import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './storage';
import './App.css';
import { createRoot } from 'react-dom/client';
import AppRoutes from './coponent/Route/Route';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoutes/>
  </Provider>
);