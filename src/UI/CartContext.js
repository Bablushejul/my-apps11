import React from 'react';

const CartContext = React.createContext( {
  items:[],
  totalAmount:0,
  addItem:(item)=>{},
  removeItems:(id)=>{},
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (token) => {},
  
  
})

export default CartContext;
