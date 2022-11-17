import React from "react";
import NavBar from "./navbar";
import "../style/paybill.css";

function PayBill(){
    return(
        <div className="PayBill">
            <NavBar/>
            <form>
                <labell> Vehicle Registration Number :</labell><br/>
                <input type="text"/>
                <button className="fetch-btn">fetch bill</button>
            </form>
        </div>
    );
}

export default PayBill