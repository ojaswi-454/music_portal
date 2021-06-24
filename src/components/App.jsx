import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { div } from "prelude-ls";

function App(){
    return (
        <div>
            <Header />  
            <div class="main">
            <Sidebar /><Home />
            </div>
            <Footer />
        </div>
    );
}

export default App;