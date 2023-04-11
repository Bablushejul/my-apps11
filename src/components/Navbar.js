import React, { useContext} from "react";
import { Link } from "react-router-dom";
//import Cart from "../Cart/Cart";
import CartButton from "../Cart/CartButton";
import CartContext from "../UI/CartContext";
import "./Navbar.css";
import { Button } from "react-bootstrap";
//import CartContext from "../UI/CartContext"



const Navbar = (props) => {
//   const [showicon, setShowicon] = useState(false);
  
// const showCarhandler=()=>{
//  setShowicon(true)
//const authctx=useContext(CartContext)
// const LogoutHandler=()=>{
// ctx.onLogout()
// }
const authctx = useContext(CartContext);
const logoHandler=()=>{
  authctx.onLogin()
  
  
   }

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
        <li>
          <Link to="/change_password">Change Password</Link>
        </li>
      </ul>
      <CartButton  onClick={props.onClick} />
      <div >
    <Button onClick={logoHandler}>logout</Button>
    </div>
    </div>
  );
};

export default Navbar;
