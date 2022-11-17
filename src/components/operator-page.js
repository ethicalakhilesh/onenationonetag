import React from "react";
import "../style/operator-page.css"
import NavBar from "./navbar";

function OperatorPage(){
    return(
        <div className="operator-page">
            <NavBar />
            <form>
                Vehicle Reg. Number: <input />
                <button> submit</button>
                <p>Current time:</p>
                <p>Last Vehicle:</p>
                <p>today count:</p>

            </form>
        </div>
    )
}

export default OperatorPage