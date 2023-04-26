import  {createContext} from 'react';

const AuthCartContext = createContext({
  token:'',
  isLoggedIn:false,
  onLogin:(token)=>{},
  onLogout:()=>{}
})
export default AuthCartContext;
