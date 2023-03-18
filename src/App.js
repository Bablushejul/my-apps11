import Store from "./routes/Store/Store";
import "./index.css";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import CartProvider from "./UI/CartProvider";
import Cart from "./Cart/Cart";
import React, {  useState } from "react";
import { Route, Routes } from "react-router-dom";
//import CartButton from "./Cart/CartButton";

function App() {
  const [showicon, setShowicon] = useState(false);
  // const showCarhandler = () => {
  //   setShowicon(true);
  // };
  const hideCartHandler=()=>{
    setShowicon(false)
  };

  return (
    <CartProvider>
      {showicon&&<Cart onClose={hideCartHandler}/>}
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
      {/* <Store value={showicon} onShowCartitem={showCarhandler}/> */}
    </CartProvider>
  );
}

export default App;
