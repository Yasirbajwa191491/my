import React,{useState} from 'react'

const App = () => {
    const [state, setstate] = useState({
        email:"",
        password:"",
        login:false,
        store:null
    })
    const sfun=(e)=>{
      const {name,value}=e.target;
      setstate({ ...state, [name]: value })
    }
    const fun=(e)=>{
        const {email,password}=state;
        e.preventDefault();
        fetch("http://localhost:3000/student",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        }).then((response)=>response.json().then((result)=>{
            localStorage.setItem("loginn",JSON.stringify({
                login:true,
                token:result.token
            }))
        }))
    }
    return (
        <>
        <div>
        <input type="email" name="email"  placeholder="Enter email" 
        value={state.email} onChange={sfun}  /><br/>
        <input type="password" name="password" placeholder="Enter password" 
        value={state.password} onChange={sfun}  />
        <button onClick ={fun}>Submit</button>
        </div>
        </>

    )
}

export default App;
