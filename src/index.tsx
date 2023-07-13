import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createMap, setMap } from './components/map/Map';

setMap(createMap())

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
