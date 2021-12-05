import React,{useEffect,useState ,useRef} from 'react';
import { useLocation,useHistory } from 'react-router';
// import Test from './Test';

 import { Route, Switch, NavLink,Redirect } from "react-router-dom";
// //import { Switch } from '@material-ui/core';
// import MaterialUiIcons from "./MaterialUiIcons";
// import ComA from "./ComA";
// import SearchButton from "./SearchButton";
// import ErrorPage from "./ErrorPage";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
 import Home from './Home';
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
import "./Login.css";
 import Gallerydata from './Gallerydata';
import GalleryPhoto from './GalleryPhoto';
import Importantmethods from './Importantmethods';

 
const App= () => {
      
      
  

const fun=()=>{
    console.log("Loading... ")
    const taz=setTimeout(()=>{
        console.log("hello world");
    },1000)
}

  return(
  <>
  <input type="text" />
  <p id="show"></p><br/>
  <button  id="butto" onClick={fun} >click</button>
  
      </>
   )
}

export default App;
