import React, { useContext } from "react";
import CatItems from "./CatItems";
import CartContext from "../UI/CartContext";
//import { Modal } from "react-bootstrap";
import Modal from "../UI/Modal";

const Cart = (props) => {
  
  const cartCtx = useContext(CartContext);
  const hasItems=cartCtx.items.length>0
  const cartAddItemHandler = (item) => {
    cartCtx.addItem(item);
  };
  const cartRemoveItemHandler = (id) => {
    
    cartCtx.removeItem(id);
  
    
  };
  const cartitems = <ul>{cartCtx.items.map((item) => (
    
    <CatItems
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      onAdd={cartAddItemHandler.bind(null,item)}
      onRemove={cartRemoveItemHandler.bind(null,item.id)}
    />
  ))};
  </ul>

  return (
    <Modal onClose={props.onClose} >
    
      {cartitems}
      <div>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
        </div>

        <div>
        <button  onClick={props.onClose}>
          Close
        </button>
        {hasItems&&<button>Purchase</button>}

        </div>
      
    </Modal>
  );
};

export default Cart;
