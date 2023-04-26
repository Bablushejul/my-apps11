import React, { useReducer ,useState} from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  
  if (action.type === "ADD") {
    const updatedtotalAmount = +action.item.price + state.totalAmount//+ +action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      console.log(updatedItem.price);
      updatedItems = [...state.items];

      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedtotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
      
    );
    
   
    const existingItem = state.items[existingItemIndex];

    const updatedtotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    
    if (existingItem.count === 1) {

      updatedItems = state.items.filter((item) => item.id !== action.id);
      
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedtotalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;


  const addItemHandler = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };
 
  const loginHandler = (token) => {
    console.log(token)
    setToken(token);

    localStorage.setItem("token", token);
  };
  const logoutHandler = () => {
    console.log(token)
    setToken(null);
    localStorage.removeItem("token");
   // localStorage.removeItem("email");
  };
  console.log(token)
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    onLogin: loginHandler,
    onlogout: logoutHandler,
    isLoggedIn: userIsLoggedIn,
    token: token,
  };
  console.log(token)
  console.log(cartContext)
console.log(token)
  return (
    <CartContext.Provider value={cartContext}>
      {" "}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
