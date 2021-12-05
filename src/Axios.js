import React,{useEffect,useState} from 'react';
import axios from "axios";
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
   const [data,setData]=useState([]);
   const [loading,setLoading]=useState()
   useEffect(() => {
      
    //   fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    //      console.log(response);
    //      return response.json();
    //   }).then((result)=>{
    //      setData(result);
    //   }).catch((error)=>{
    //  console.log("failed to fetch data")
    //   })
   const fun= async ()=>{
     const res=await axios.get("https://mocki.io/v1/80bbbc9e-cf5c-4ee4-a698-07e4ee878ffa");
     console.log(res.data);
     setLoading(res.data.id);
   }
   fun();
   }, [])
  //  if(loading){
  //     return <div>
  //        <h2 className="text-center text-danger mt-auto">Loading...</h2>
  //     </div>
  //  }
   return (
      <>
      <h1>{loading}</h1>
<table border="1">
{
   data.map((item)=>{
      <tr>
         <td>{item.id}</td>
         <td>{item.userId}</td>
         <td>{item.title}</td>
         <td>{item.body}</td>
      </tr>
   })
}

</table>
     
     

     
        </>
   )
}

export default App;
