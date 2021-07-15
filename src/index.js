import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
 import Main from "./components/Main";
// import Login from "./components/loginpage";
import Signup from "./components/containers/Signup/index";
import Signin from "./components/containers/Signin/index"

function Appp(){
    return(
<Switch>

<Route exact="true" path="/" component={Main} />
<Route  path="/signup" component={Signup} />
<Route  path="/signin" component={Signin} />
</Switch>
    )

}
ReactDOM.render(<BrowserRouter><Appp/></BrowserRouter>, document.getElementById("root"));


  