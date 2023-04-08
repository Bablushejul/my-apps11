import React from "react";
import { Link } from "react-router-dom";
//import Cart from "../Cart/Cart";
import CartButton from "../Cart/CartButton";

import "./Navbar.css";



const Navbar = (props) => {
//   const [showicon, setShowicon] = useState(false);
  
// const showCarhandler=()=>{
//  setShowicon(true)

 

  return (
    <div className="header" >
      <ul className="nav-menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">Store</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <CartButton  onClick={props.onClick} />
    
    </div>
  );
};

export default Navbar;
