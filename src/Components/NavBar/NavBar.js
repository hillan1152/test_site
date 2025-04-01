import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = props => {
    return (
        <div className="nav-container">
            <h1>JobFlow</h1>
            <nav>    
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};