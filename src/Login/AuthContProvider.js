import { useState } from "react";
import AuthCartContext from "./AuthCartContext";

const AuthContProvider = (props) =>{
   const [ token,setToken] = useState(null)
   
   const userIsLoggedIn = token;
   
   const loginHandler =(token)=>{
    console.log(token)
    setToken(token);
    
   }
const logoutHandler =()=>{
    setToken(null)
}
console.log(token)
  
    const  contextValue = {
        token:token,
        isLoggedIn:userIsLoggedIn,
        onLogin:loginHandler,
        onLogout:logoutHandler,
    }
    
return (
    <AuthCartContext.Provider value={contextValue}>
        {props.children}
    </AuthCartContext.Provider>
)


}
export default   AuthContProvider;