import React, { useState } from 'react';
import Log from './Log';

const App = () => {
    const[state,setState]= useState({
   email:"",
   pass:"",
    })
    const fun=(event)=>{
     const name=event.target.name;
     const value=event.target.value;
     setState((preValue)=>{
         console.log(preValue);
       return {
        ...preValue,
         [name]:value,}
     })
    }
const subFun=(e)=>{
    e.preventDefault();
    localStorage.setItem("login",JSON.stringify(state))
}
    return (
        <>
         <form onSubmit={subFun}>
             <input type="text" name="email" placeholder="Email" value={state.email} onChange={fun}  /><br/>
             <input type="password" name="pass" placeholder="Password" val={state.pass} onChange={fun} /><br/>
             <button>submit</button>
         </form> 
         <Log />  
        </>
    )
}

export default App;
