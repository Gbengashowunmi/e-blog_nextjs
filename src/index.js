import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthenticationContextProvider } from './pages/Login/AuthContext';
// import reportWebVitals from '/./reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider> 
    <App />
    </AuthenticationContextProvider>
  </React.StrictMode>
);
