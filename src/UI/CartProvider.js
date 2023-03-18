import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
 
  console.log(action)
  if (action.type === "ADD") {
    const updatedtotalAmount =
      +(action.item.price) * +(action.item.count);
    console.log(updatedtotalAmount);
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
      console.log(updatedItem.amount);
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
    const existingItemIndex = state.itemsfindIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedtotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
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

  const addItemHandler = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {" "}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
