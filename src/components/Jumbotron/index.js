import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <h1>Clicky Game</h1>
      <p>
      Click on an Image.  The images will shuffle.  Click a different image.  Don't click an image more than once!
      </p>
    </div>
  );
}

export default Jumbotron;
