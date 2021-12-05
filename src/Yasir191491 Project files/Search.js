import React,{useState} from 'react'

const App = () => {
  const [state, setstate] = useState("");
  const fun=(e)=>{
    setstate(e.target.value);
    //console.log(state);
  }
  const cfun=()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?q=${state}`).then((res)=>{
      res.json().then((result)=>{
        console.log(result);
      })
    })
    
  }
  return (
    <>
      <input type="text" onChange={fun}  value={state}  />
      <button onClick={cfun}>search</button>
    </>
  )
}

export default App
