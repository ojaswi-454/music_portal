import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
 import Header from "./components/Header";
import Login from "./components/loginpage";

import './components/joining';
function Appp(){
    return(
<Switch>

<Route exact="true" path="/" component={Header} />
<Route  path="/login" component={Login} />
</Switch>
    )

}
ReactDOM.render(<BrowserRouter><Appp/></BrowserRouter>, document.getElementById("root"));


  