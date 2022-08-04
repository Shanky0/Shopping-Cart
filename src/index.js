import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './Components/Header';
import Main from './Components/Main';
import Offer from './Components/Offer';
import App from './App';

// import Login from './Components/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <App/>
    {/* <Main/> */}
    {/* <Offer/> */}
  </React.StrictMode>
);


reportWebVitals();
