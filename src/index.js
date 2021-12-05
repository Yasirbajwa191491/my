import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MaterialUiIcons from "./MaterialUiIcons";
import App from './App';
import { BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import {RecoilRoot} from "recoil";
//import './index.css';
import store from './Redux/Store';
ReactDOM.render(
 <>
 
 <BrowserRouter>
 <Provider store={store}>
 <RecoilRoot>
 <App/>
 </RecoilRoot>
 </Provider>
 </BrowserRouter>
 </>,
document.getElementById("root")
);