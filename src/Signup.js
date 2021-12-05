import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import "./Login.css";
import Footer from './Footer';
const Signup = () => {
    const [state, setstate] = useState({
        name:"",
        email:"",
        pass:"",
        no:""
    });
  
  let history=useHistory();
    const fun=(event)=>{
       const value= event.target.value;
       const name= event.target.name;
       setstate((prevvalue)=>{
          return{ ...prevvalue,
           [name]:value,}
       })
    
    }
    const cfun=(event)=>{
         event.preventDefault();
       console.log(state);
       const { name,email,pass,no} = state;

    if (name && email && pass && no) {
      const res = fetch(
        "http://localhost:3000/student",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name,email,pass,no}),
        }
      ).then((response)=>response.json().then((result)=>{
        console.log(result);
        localStorage.setItem("signupdata",JSON.stringify({email,pass}))
      }))

      if (res) {
        setstate({
          name:"",
          email:"",
          pass:"",
          no:""
      });
        alert("Data Stored");
        history.push("/login");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
 // history.push("/login");
    }
    return (
        <>
        <h1 className="text-danger text-center" style={{backgroundColor:"#30336b",
        height:"60px",marginTop:"150px"}}>Sign up Form</h1>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div>
             <div classNameName="signup" style={{marginTop:"50px",border:"5px solid #fdcb6e",
             height:"550px",width:"450px",padding:"40px",color:"white"}}>
<form >
<div className="mb-3">
    <label for="exampleInputName1" className="form-label" style={{fontSize:"2rem"}}>Name</label>
    <input type="text" className="form-control" name="name" value={state.name} onChange={fun} id="exampleInputName1" autoComplete="off" 
    required style={{borderRadius:"30px"}}/>
  </div>
  <div className="mb-3" >
    <label for="exampleInputEmail1" className="form-label" style={{fontSize:"2rem"}} >Email address</label>
    <input type="email" className="form-control" name="email" value={state.email} onChange={fun} id="exampleInputEmail1" aria-describedby="emailHelp"
     autoComplete="off" required style={{borderRadius:"30px"}}/>
    <div id="emailHelp" className="form-text" style={{fontSize:"1rem"}}>We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label" style={{fontSize:"2rem"}}>Password</label>
    <input type="password" name="pass" value={state.pass} onChange={fun} className="form-control" id="exampleInputPassword1"
     autoComplete="off" required style={{borderRadius:"30px"}} />
  </div>
  <div className="mb-3">
    <label for="exampleInputNumber1" className="form-label" style={{fontSize:"2rem"}} >Mobile Phone</label>
    <input type="tel" className="form-control" name="no" value={state.no} onChange={fun} id="exampleInputNumber1" autoComplete="off"
     required style={{borderRadius:"30px"}}/>
    <div id="emailHelp" className="form-text" style={{fontSize:"1rem"}} >We'll never share your Mobile Phone with anyone else.</div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" autoComplete="off"
     required />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <Button type="submit" style={{backgroundColor:"#95afc0"}} onClick={cfun} >Submit</Button>
</form>
      </div>
      </div>
      </div>
      <br />
      <br />
      <Footer />
        </>
    )
}

export default Signup;
