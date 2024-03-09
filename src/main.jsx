import React from 'react';
import ReactDOM from 'react-dom/client';
import { FiltersProvider } from './context/filters.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
