import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Создайте этот файл для сброса стилей (например, body { margin: 0; })
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);