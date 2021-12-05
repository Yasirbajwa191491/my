//     //to redirect to that site
// import React from 'react';
// import { useHistory,useLocation } from 'react-router';


// const Importantmethods = () => {
//     const fourth= document.getElementById("foa");
//     const func=(event)=>{
//         console.log(event);
//     }
//     fourth.addEventListener('click',func);

//     const history=useHistory();
//    const fun=()=>{
//       history.goBack(); //go back
//       window.history.back()  //another method to go back
//     window.history.forward()  //to go forward
//    }
//    //const location=useLocation();
//    const fun1=()=>{
//    window.location.href="https://youtube.com/";   //to redirect to that website
//    }
//   // const location=useLocation();
//    //const history=useHistory();
//    const fun2=()=>{
//   return history.push("/menu");      //to redirect to that page
//    }
//    const arr={a:1,[3+2]:2,c:3,e:4};  //how to add value dynamically in object in ES6
//    const {...d}=arr;  //array destructring
//    console.log(d);

//    const arr1={a:2,[3+2]:2,c:3,e:4};  // if name and value are same you can write simple name of variable
//    const {...d1}=arr1;  //rest operator
//    console.log(d1);

//    const arr2=[
//     [1,2],[3,4],[5,6]
// ]
// const obj={a:1,b:2}
// console.log(arr2.flat(Infinity));    //to multiple arrays in one array
// console.log(Object.entries(obj));  //to convert object to array
// console.log(Object.fromEntries(arr));  //to convert array to object

// const obj={hello:"aaaaaa",wold:"ssssss"}
// const obj1=JSON.stringify(obj);        //convert js object to json
// console.log(obj1);
// const obj2=JSON.parse(obj1);   //convert json to js object
// console.log(obj2);
//     return (
//         <div>
//         <p id="main"></p>
//         <a href="#" id="foa">
//             Click me please
//         </a>
//             <button onClick={fun}>click</button>
//             <button onClick={fun1}>click1</button>
//             <button onClick={fun2}>click2</button>
//         </div>
//     )
// }

// export default Importantmethods;
