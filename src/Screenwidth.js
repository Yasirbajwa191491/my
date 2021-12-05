import React,{useEffect,useState} from 'react';
// import Test from './Test';


const App= () => {
 const [state, setstate] = useState(window.screen.width)

 const fun=()=>{
    const widthsc=window.innerWidth;
    setstate(widthsc);
 }
 useEffect(()=>{
    window.addEventListener("resize",fun)
   return ()=>{
      window.removeEventListener("resize",fun)
    }
 })
      return (
      <>
        <div className="text-center text-danger bg-black fw-bold mt-5">window width is: {state}</div>
     
     
        </>
   )
}

export default App;
