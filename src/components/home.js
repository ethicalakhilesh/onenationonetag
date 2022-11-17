import React from "react";
import NavBarHome from "./navBarHome";
import "../style/home.css";

function Home(){
    return(
        <div className="Home">
            <NavBarHome />
            <h1 className="titleTag">
                One Nation One Tag
            </h1>
        </div>
    );
}

export default Home