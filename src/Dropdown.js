import React,{useEffect,useState ,useRef} from 'react';

 const a="hello world";
const App= () => {
//     const arr=[
//         [1,2],[3,4],[5,6]
//     ]
//     console.log(arr.flat(Infinity));
//     //document.getElementById("show").innerHTML=" 'yasir".padStart(7);

  
// const x=10;
// const fun=()=>{
//     console.log(x);
//     console.log("Loading... ")
//     const taz=setTimeout(()=>{
//         console.log("hello world");
//     },1000)
// }

const fun=()=>{
const x=document.getElementById("opt").selectedIndex;
const y=document.getElementById("opt").options;
alert("Index: "+y[x].index+" is "+y[x].text);
}
  return(
  <>
    <form >
                <select name="opt" id="opt">
                    <option value="1">Select</option>
                    <option value="1">option1</option>
                    <option value="2">option2</option>
                    <option value="1">option3</option>
                </select>
            </form>
            <button onClick={fun}>click</button>
      </>
   )
}

export default App;
