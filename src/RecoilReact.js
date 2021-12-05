import React from 'react';
import { useRecoilState,atom,selector,useRecoilValue } from 'recoil';

const App = () => {
 
  const setAtom=atom({
    key:"atomState",
    default:0
  })
  const [name,setName]=useRecoilState(setAtom);
  const recoilSelector=selector({
    key:"selectorState",
    get:(({get})=>{
    const text=get(setAtom);
    return text.length;
    })
  })
  return (
    <>
     <input type="text" onChange={(e)=>setName(e.target.value)}     /> 
     <p>{name}</p>
     <p>{useRecoilValue(recoilSelector)}</p>
     
    </>
  )
}

export default App
