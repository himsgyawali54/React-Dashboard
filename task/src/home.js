import React from "react";
import Dashboard from "./dashboard";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
function Home(){
    return(
        <div className="wrapper">
            <Header />
            <Menu />
            <Dashboard />
            <Footer />
            

        </div>
    );
}
export default Home;