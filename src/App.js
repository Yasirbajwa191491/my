import React from 'react'
import Signup from './Signup'
import Login from './Login';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import About from "./About";
import Home from "./Home";
import GalleryPhoto from './GalleryPhoto';
import GoogleKeep from './GoogleKeep';
import ToDoList from "./ToDoList";
const App = () => {
    return (
        <>
              
              <Switch >
                  <Route exact path="/" component={Home}    />
                  <Route exact path="/home" component={Homepage}    />
                  <Route exact path="/card" component={GalleryPhoto}    />
                  <Route exact path="/todo" component={ToDoList}    />
                  <Route exact path="/keep" component={GoogleKeep}    />
                  <Route exact path="/signup" component={Signup}    />
                  <Route exact path="/login" component={Login}    />
                  <Route exact path="/contact" component={Contact}    />
                  <Route exact path="/about" component={About}    />
              </Switch>  
        </>
    )
}

export default App