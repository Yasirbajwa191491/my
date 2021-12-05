import React,{useReducer,useRef,useState} from 'react';



const App = () => {
   
   const item=useRef(null);
   const subfun=(e)=>{
      e.preventDefault();
    const data= item.current.value;
    console.log(data);
   }
   const initialstate={
      list:[],
   }
   const reducer=(state=item,action)=>{
  switch(action.type){
     case "ITEM":
        return{
           data:[
              ...state,
           ]
        }
        default: return state;
  }
   }
   const [state,dispatch]=useReducer(reducer,initialstate);
   return (
      <>
      <h1>{state}</h1>
      <form onSubmit={subfun}>
      <input type="text" placeholder="add item" id="item" ref={item}/>
      <button onClick={()=>dispatch({type:"ITEM"})}>submit</button>
      </form>
      </>
   )
}

export default App;
