import React from "react";

function Header() {
    return (

        <div class="navbar">
            <div>
                <h1>Music portal</h1>
            </div>

            <div class="nav">
                <div class="profile">
                    <a href="#">Profile</a>
                </div>
                <div class="competetion">
                    <a href="#">competetion</a>
                </div>

                <div class="searchbar">

                    <form action="/action_page.php">
                        <input type="text" class="search" placeholder="Search.." name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>

                </div>
                <div class="login">
                    <a href="#">Login</a>
                </div>
                <div class="signup">
                    <a href="#">SignUp</a>
                </div>
            </div>
        </div>

    );
}


export default Header;