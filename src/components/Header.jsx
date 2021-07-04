import React,{useState} from "react";
import App from "./App";
import Join from "./loginpage"

var shw=false;
function Header() {
    const [isShow,setShow]=useState(false);
    var btnname=!isShow?"Login/SignUp":"Back";
   
     return (
         !isShow?
         <>
        <div class="navbar">
            <div class="nav">
                <div class="profile">
                    <a href="joining.html">Profile</a>
                </div>
                <div class="competetion">
                    <a href="joining.html">competetion</a>
                </div>

                <div class="searchbar">

                    <form action="/action_page.php">
                        <input type="text" class="search" placeholder="Search.." name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>

                </div>
                
                <div className="login">
                   <a className="login" type="submit" onClick={()=>setShow(!isShow)} >{btnname}</a>
                </div>
            </div>
        </div>
        <App/>
        </>
    
    :
    <>
        <Join/>
        <div className="login">
            <a className="login" type="submit" onClick={()=>setShow(!isShow)} >{btnname}</a>
        </div>
    </>

     )  
    
}


export default Header;
