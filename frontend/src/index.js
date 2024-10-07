import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalState from './components/context/GlobalState';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
const GoogleClientId = "826655367452-e6cm32egksbpaidhb701fcicn10pkujl.apps.googleusercontent.com";
root.render(
  <GoogleOAuthProvider clientId={GoogleClientId}>
    <GlobalState>
      <App />
    </GlobalState>
  </GoogleOAuthProvider>
);
reportWebVitals();
