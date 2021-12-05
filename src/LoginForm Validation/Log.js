import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Log = () => {
    const[state,setState]= useState({
   email:"",
   pass:"",
    })
    const fun=(event)=>{
     const name=event.target.name;
     const value=event.target.value;
     setState((preValue)=>{
        // console.log(preValue);
       return {
        ...preValue,
         [name]:value,}
     })
    }
const subFun=(e)=>{
    e.preventDefault();
    // const data=JSON.parse( localStorage.getItem("login",state));
    // //console.log(data);
    // if (state.email === data.email && state.pass === data.pass){}
        toast.success("Login successfully!",{
            position:"top-center",
          });
        toast.error("Login Unsuccessfully!",{
            position:"top-center",
          });
        toast.warn("Login Unsuccessfully!",{
            position:"top-center",
          });
        toast.dark("Login successfully!",{
            position:"top-center",
          });
    
}
    return (
        <>
         <form onSubmit={subFun}>
             <input type="text" name="email" placeholder="Email" value={state.email} onChange={fun}  /><br/>
             <input type="password" name="pass" placeholder="Password" val={state.pass} onChange={fun} /><br/>
             <button>submit</button>
         </form>  
         <ToastContainer /> 
        </>
    )
}

export default Log;
