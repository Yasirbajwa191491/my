import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
// import "./Login.css";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Footer from './Footer';
const Login = ()=> {
     
    const[state,setState]= useState({
   email:"",
   pass:"",
    })
    const history=useHistory();
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
const cfun=(e)=>{
    e.preventDefault();
    console.log(state);
    const data=JSON.parse( localStorage.getItem("signupdata",state));
    //console.log(data);
    if (state.email === data.email && state.pass === data.pass){
      alert("Login successfully")
       history.push("/home");
        }
        else{
          toast.error("Login Unsuccessfully!",{
            position:"top-center",
        })
}

}
    return (
        <>
           <h1 className="text-danger text-center" style={{backgroundColor:"#30336b",
        height:"60px",marginTop:"150px"}}>Login Form</h1>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div>
             <div classNameName="signup" style={{marginTop:"50px",border:"5px solid #fdcb6e",
             height:"550px",width:"450px",padding:"40px",color:"white"}}>
<form >

  <div className="mb-3" >
    <label for="exampleInputEmail1" className="form-label" style={{fontSize:"2rem"}}>Email address</label>
    <input type="email" className="form-control" name="email" value={state.email} onChange={fun} id="exampleInputEmail1" aria-describedby="emailHelp"
     autoComplete="off" required style={{borderRadius:"30px"}}/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label" style={{fontSize:"2rem"}}>Password</label>
    <input type="password" name="pass" value={state.pass} onChange={fun} className="form-control" id="exampleInputPassword1"
     autoComplete="off" required style={{borderRadius:"30px"}} />
  </div>
  
  <Button type="submit" style={{backgroundColor:"#95afc0",borderRadius:"40px"}} onClick={cfun}
   className="btn  btn-style">Login</Button>
  <Button type="submit" className="btn  btn-style" style={{backgroundColor:"#95afc0",borderRadius:"40px"}}
  onClick={()=>history.push("./signup")}>Sign up</Button>
</form>
      </div>
      </div>
      </div>
      <ToastContainer />
      <br /> <br />
        <Footer />
        </>
    )
}

export default Login;
