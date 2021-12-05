import React, { useState } from 'react';

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
    localStorage.setItem("log",JSON.stringify(state))
}
    return (
        <>
         <form onSubmit={subFun}>
             <input type="text" name="email" placeholder="Email" value={state.email} onChange={fun}  /><br/>
             <input type="password" name="pass" placeholder="Password" val={state.pass} onChange={fun} /><br/>
             <button>submit</button>
         </form> 
         <button onClick={()=>localStorage.removeItem("log")}>Log out</button>  
        </>
    )
}

export default App;
