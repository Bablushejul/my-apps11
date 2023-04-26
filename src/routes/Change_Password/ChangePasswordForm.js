import React,{useRef} from 'react';
import { useContext } from 'react';
import CartContext from '../../UI/CartContext'
//import AuthCartContext from '../../Login/AuthCartContext';

const ChangePasswordForm = () => {

  
  const newPasswordInputRef=useRef()

  const authctx=useContext(CartContext)
  console.log(authctx+"hello")


  const submitHandler=(event)=>{


console.log(authctx)
    event.preventDefault()
    const newPassword=newPasswordInputRef.current.value;
console.log(newPassword)
console.log(authctx.token)
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBVolZfGhV4B7RviO8NQOjLMUj0J6iWezA',{
    
      method:"POST",
      body: JSON.stringify({
        idToken:authctx.token,
        password:newPassword,
       
        returnSecureToken:true,
      }),
      headers:{
        'Content-Type':'application/json',
       
      },
    }).then((res)=>{


    })
  }

  return (
    <form onSubmit={submitHandler}>
      <input type='password' ref={newPasswordInputRef} />
      <button>Change Password</button>
    </form>
  );
}

export default ChangePasswordForm;
