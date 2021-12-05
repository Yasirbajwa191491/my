import React,{useEffect,useState} from 'react';
import { incNum,decNum } from './Redux/Action';
import { useSelector, useDispatch } from 'react-redux';
const App= () => {
  
   const myState=useSelector((state)=> state.changeNum);
   const dispatch=useDispatch();
   
   return (
      <>
     

     <button onClick={()=>dispatch(incNum())} className="btn btn-success">Increm</button>
     <input type="text" value={myState}/>
    <button onClick={()=>dispatch(decNum())} className="btn btn-success">Decre</button>
        </>
   )
}

export default App;
