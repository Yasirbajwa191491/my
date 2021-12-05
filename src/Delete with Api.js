import React,{useEffect,useState} from 'react';


const App= () => {
   const [data,setData]=useState([]);
  // const [loading,setLoading]=useState(true)
   const [state, setstate] = useState("");
   const cfun=() => {
      console.log(state);
      fetch(`http://localhost:3000/student/${state}`,{
        method:"DELETE",
        headers:{
          'Content-Type':"application/json",
        }
      }).then((res)=>res.json().then((result)=>{
         console.log(result);
       //alert("Data has been deleted successfully");
      })
      )

      
   
   }
   
   return (
      <>
<input type="text" onChange={(e)=>setstate(e.target.value)} value={state} />     
<button onClick={cfun}>submit</button>    

     
        </>
   )
}

export default App;
