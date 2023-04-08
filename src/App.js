import Store from "./routes/Store/Store";
import "./index.css";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
//import CartProvider from "./UI/CartProvider";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import React, {  useState,useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CartContext from "./UI/CartContext";
//import AuthContext from "./Login/AuthContext";
//import MainHeader from "./Login/MainHeader";
//import CartButton from "./Cart/CartButton";



function App() {
  const [showicon, setShowicon] = useState(false);
  
  const showCarhandler = () => {
    setShowicon(true);
  };
  const hideCartHandler=()=>{
    setShowicon(false)
  };
  
  const authctx=useContext(CartContext);

  return (
    <React.Fragment>
     
  
      
      <main>     {!authctx.isLoggedIn&&<Login />}
      {console.log('by')}
      {showicon&& <Cart onClose={hideCartHandler}/>}
      <Routes>
       {authctx.isLoggedIn&&(<Route path="/" element={<Store onShow={showCarhandler}/>} />)}
        {authctx.isLoggedIn&&(<Route path="/home" element={<Home />} />)}
        {authctx.isLoggedIn&&(<Route path="/about" element={<About />} />)}
       
      </Routes>
      </main>


      {/* <Store value={showicon} onShowCartitem={showCarhandler}/> */}
    
    </React.Fragment>
  );
}

export default App;
