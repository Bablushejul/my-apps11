import React,{useContext} from 'react';
import CartContext from '.././UI/CartContext'
import { Button } from 'react-bootstrap';

const CartButton = (props) => {
  const cartCtx= useContext(CartContext);
  const numberofCartItems=cartCtx.items.reduce((currNumber,item)=>{
    return currNumber+item.count
  },0)
  console.log(cartCtx)
  return (
    <Button onClick={props.onClick}>
      <div>CART</div>
      <div>{numberofCartItems}</div>
    </Button>
  );
}

export default CartButton;
