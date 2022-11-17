import React from "react";
import "../style/operator.css"
import NavBar from "./navbar";

function Operator(){
    return(
        <div className="operator">
            <NavBar />
            <form style={{margin: "10%"}}>
                username:<br/><input type="text" /><br/>
                password: <br/> <input type="password"/><br />
                <button className="login-btn">login</button>
            </form>
        </div>
    )
}

export default Operator