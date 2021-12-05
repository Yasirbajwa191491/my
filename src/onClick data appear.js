import React,{useEffect,useState ,useRef} from 'react';

 const a="hello world";
const App= () => {
const fun1=()=>{
  const note=document.createElement('div');
  note.classList.add('first');

const data=`<div>  ddd</div>`;
note.insertAdjacentHTML('afterbegin',data);
console.log(note);
document.body.appendChild(note);
}
  return(
  <>
    
            <button onClick={fun}>click</button><br/>
            <button onClick={fun1}>click me</button>
            <div id="first">

            </div>
      </>
   )
}

export default App;
