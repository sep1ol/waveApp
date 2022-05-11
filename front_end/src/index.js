import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WaveProvider } from './context/WaveContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <WaveProvider>
      <App />
    </WaveProvider>
  </React.StrictMode>
);