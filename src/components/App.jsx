import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Home from "./Home";

function App(){
    return (
        <div>
            {/* <Header />   */}
            <div className="main">
            <Sidebar />
            <Home />
            </div>
            <Footer />
        </div>
    );
}

export default App;