import React,{useState} from "react";
import App from "./App";

import {BroswerRouter,Link,Switch,Route,NavLink} from 'react-router-dom';

import Header from "./Header/index";
// import { Jumbotron,Navbar,Nav,NavDropdown } from "react-bootstrap";


// import Login from "./loginpage"
var shw=false;
function Main() {
   
     return (
    <>
       <Header/>
    <App/>
    </>
)}


export default Main;
