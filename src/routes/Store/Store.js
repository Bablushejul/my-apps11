import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero/Hero";
//import Header from "../../components/Hero/Header";
import Footer from "../../components/Hero/Footer";
import CartContext from "../../UI/CartContext";
const Store = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount,count) => {
    cartCtx.addItem({
      id:amount.id,
      name:amount.name
      ,price:amount.price,
      amount:amount.price,
      count:count
    });
    console.log(cartCtx.amount)
    
  };
  return (
    <div>
      <Navbar onclick={props.onShowCart}/>
    
      <Hero
        id={props.id}
        name={props.name}
        price={props.price}
        amount={props.amount}
        onAddCart={addToCartHandler}
      />
      <Footer />
    </div>
  );
};

export default Store;
