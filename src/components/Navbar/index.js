import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-color">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto ml-5">
                <li className="nav-item active text-white">
                    <a className="nav-link" href="/">Clicky Game</a>
                </li>
            </ul>
        </div>
        <div className="mx-auto order-0 navbar-brand text-white">
            <span classNameName="nav-comm">Click an Image to Begin!</span>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item text-white game-score">
                    <strong>Score:</strong> {props.gamescore || 0} <strong>|</strong>
                </li>
                <li className="nav-item text-white top-score">
                    <strong>| Top Score:</strong> {props.topscore || 0} 
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;