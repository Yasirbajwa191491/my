import React,{useEffect,useState ,useRef} from 'react';
// import Test from './Test';

 import { Route, Switch, NavLink,Redirect } from "react-router-dom";
// //import { Switch } from '@material-ui/core';
// import MaterialUiIcons from "./MaterialUiIcons";
// import ComA from "./ComA";
// import SearchButton from "./SearchButton";
// import ErrorPage from "./ErrorPage";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Home from './Home';
// import Post from './Post';
// import About from './About';
// import Contact from './Contact';
// import Navbar from './Navbar';
// import AddPost from './AddPost';
// import TempWeb from "./TempWeb";
// import ToDoList from "./ToDoList";
// import GalleryPhoto from "./GalleryPhoto";
// import Signup from './Signup';
// import Frontpage from './Frontpage';
// import "./index.css";
// import Footer from './Footer';
// import Datasave from './Datasave';
// import GoogleKeep from "./GoogleKeep";
 import Gallerydata from './Gallerydata';

 const gadata=[
   {
  id: 1,
  Image:"/images/breakfast.jpg",
  name:"breakfast",
  category:"breakfast",
  price:"12$",
   },   
   {
       id: 2,
       Image:"/images/lunch1.jpg",
       name:"lunch",
       category:"lunch",
       price:"22$",
        },
        {
           id: 3,
           Image:"/images/dinner1.jpg",
           name:"dinner",
           category:"dinner",
           price:"26$",
            },
            {
               id: 4,
               Image:"/images/breakfast.jpg",
               name:"evening",
               category:"evening",
               price:"18$",
                },
                {
                   id: 5,
                   Image:"/images/lunch1.jpg",
                   name:"breakfast",
                   category:"breakfast",
                   price:"92$",
                    }  ,
                    {
                       id: 6,
                       Image:"/images/breakfast.jpg",
                       name:"breakfast",
                       category:"breakfast",
                       price:"12$",
                        },   
                        {
                            id: 7,
                            Image:"/images/lunch1.jpg",
                            name:"lunch",
                            category:"lunch",
                            price:"22$",
                             },
                             {
                                id: 8,
                                Image:"/images/dinner1.jpg",
                                name:"dinner",
                                category:"dinner",
                                price:"26$",
                                 },
                                 {
                                    id: 9,
                                    Image:"/images/breakfast.jpg",
                                    name:"evening",
                                    category:"evening",
                                    price:"18$",
                                     },
                                     {
                                        id: 10,
                                        Image:"/images/lunch1.jpg",
                                        name:"breakfast",
                                        category:"breakfast",
                                        price:"92$",
                                         }  ,
                       
                           
]


const App= () => {
   const arr=[2,3,6,9,1,10];
   // arr.push(22);
   // console.log( arr);
   // arr.unshift(23);
   // console.log( arr);
//   arr.pop();
//   console.log(arr);
//   arr.splice(2,1,9)
//   console.log(arr);
//   for(let i of arr){
//      const sq=Math.sqrt(i);
//      console.log(sq);
//   }
const al= arr.reduce((Accumulator,currele)=>{
    Accumulator +=currele;
    
})
console.log(al);
      return (
      <>
        
        </>
   )
}

export default App;
import React,{useEffect,useState ,useRef} from 'react';
// import Test from './Test';

 import { Route, Switch, NavLink,Redirect } from "react-router-dom";
// //import { Switch } from '@material-ui/core';
// import MaterialUiIcons from "./MaterialUiIcons";
// import ComA from "./ComA";
// import SearchButton from "./SearchButton";
// import ErrorPage from "./ErrorPage";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Home from './Home';
// import Post from './Post';
// import About from './About';
// import Contact from './Contact';
// import Navbar from './Navbar';
// import AddPost from './AddPost';
// import TempWeb from "./TempWeb";
// import ToDoList from "./ToDoList";
// import GalleryPhoto from "./GalleryPhoto";
// import Signup from './Signup';
// import Frontpage from './Frontpage';
// import "./index.css";
// import Footer from './Footer';
// import Datasave from './Datasave';
// import GoogleKeep from "./GoogleKeep";
//import "./Login.css";
 import Gallerydata from './Gallerydata';
import GalleryPhoto from './GalleryPhoto';

 const gadata=[
   {
  id: 1,
  Image:"/images/breakfast.jpg",
  name:"breakfast",
  category:"breakfast",
  price:"12$",
   },   
   {
       id: 2,
       Image:"/images/lunch1.jpg",
       name:"lunch",
       category:"lunch",
       price:"22$",
        },
        {
           id: 3,
           Image:"/images/dinner1.jpg",
           name:"dinner",
           category:"dinner",
           price:"26$",
            },
            {
               id: 4,
               Image:"/images/breakfast.jpg",
               name:"evening",
               category:"evening",
               price:"18$",
                },
                {
                   id: 5,
                   Image:"/images/lunch1.jpg",
                   name:"breakfast",
                   category:"breakfast",
                   price:"92$",
                    }  ,
                    {
                       id: 6,
                       Image:"/images/breakfast.jpg",
                       name:"breakfast",
                       category:"breakfast",
                       price:"12$",
                        },   
                        {
                            id: 7,
                            Image:"/images/lunch1.jpg",
                            name:"lunch",
                            category:"lunch",
                            price:"22$",
                             },
                             {
                                id: 8,
                                Image:"/images/dinner1.jpg",
                                name:"dinner",
                                category:"dinner",
                                price:"26$",
                                 },
                                 {
                                    id: 9,
                                    Image:"/images/breakfast.jpg",
                                    name:"evening",
                                    category:"evening",
                                    price:"18$",
                                     },
                                     {
                                        id: 10,
                                        Image:"/images/lunch1.jpg",
                                        name:"breakfast",
                                        category:"breakfast",
                                        price:"92$",
                                         }  ,
                       
                           
]


const App= () => {
   const [state, setstate] = useState(true);
   const arr=[2,3,6,9,1,10];
   // arr.push(22);
   // console.log( arr);
   // arr.unshift(23);
   // console.log( arr);
//   arr.pop();
//   console.log(arr);
//   arr.splice(2,1,9)
//   console.log(arr);
//   for(let i of arr){
//      const sq=Math.sqrt(i);
//      console.log(sq);
//   }
// const al= arr.reduce((Accumulator,currele)=>{
//     Accumulator +=currele;
    
// })
// console.log(al);
         const fun=()=>{
      const strr=` I have come to know through your advertisement in Express news on September 30,
      2019 that some posts of lecturer in computer science are lying vacant under your control. 
      I would like to apply as one of the candidates for the said posts. Find my documents enclosed.
      I have come to know through your advertisement in Express news on September 30,
      2019 that some posts of lecturer in computer science are lying vacant under your control. 
      I would like to apply as one of the candidates for the said posts. Find my documents enclosed.`;
      document.getElementById("para").innerHTML=strr;
       }
       const str="        hello wold       ";
       let l1=str.charCodeAt(str.length-1);  //return  unicode of last character
       console.log(l1);
         console.log(str.trim());
         console.log(str.split(" "));
         const dat=new Date()
         const msec=Date.now();   //return total millionseconds since jan 1,1970;
         console.log(dat);
         console.log(msec); 
         console.log(dat.getMonth()); //using    .get...      we can get year,mint,sec,year,month
         console.log(dat.setHours(11)); //using    .set...      we can set year,mint,sec,year,month
         return (
      <>
      <div style={{border:"1px solid black"}}>
        <p> I have come to know through your advertisement in Express news on September 30,
        2019 that some posts of lecturer in computer science are lying vacant under your control. 
        I would like to apply as one of the candidates for the said posts. Find my documents enclosed.</p>
      {state? <button onClick={fun}>Read more</button>: <button>Read</button>}
       <p id="para"></p>
       </div>
      </>
   )
}

export default App;
