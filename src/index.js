import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartProvider from './UI/CartProvider';
//import AuthContext from './Login/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartProvider>
    
 
 
);