import React,{ useState,useEffect } from "react";
import ToDo  from "./ToDo";

const App=(props)=>{
const [name,setname]=useState();


const storage=()=>{
  const list= JSON.parse( localStorage.getItem("list"));
  console.log(list);
  if(list){
  return JSON.parse( localStorage.getItem("list"));
  }
  else{
     return []
  }

}
const [item,setitem]=useState(storage());
const fun=(e)=>{
setname(e.target.value);
}
const cfun=()=>{
    setitem((prevalue)=>{
        return [...prevalue,name];
    })
    setname("");
}
useEffect(()=>{
localStorage.setItem("list",JSON.stringify(item));
})

return (
<>
<div className="main">
<h1> toDo List</h1>
<input type="text " onChange={fun} value={name} placeholder="add a item" />
<button onClick={cfun}>Submit</button>

<ol>
   { item.map((valueele,index)=>{
      
       return <ToDo  key={index} id={index} text={valueele}
           
       />;}
    ) }
</ol>
</div>
</>
)
}
export default App;

