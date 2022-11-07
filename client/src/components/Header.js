import React from "react";
import NavBar from "./NavBar";
import "../styles/Header.css"

function Header(){
    return(
        <div className="headerDiv">
            <h1 className="headerTitle">Water Heifer</h1>
            <NavBar />
        </div>
    )
}

export default Header