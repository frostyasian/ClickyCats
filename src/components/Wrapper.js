import React from "react";
import "../assets/css/main.css";

const Wrapper = props => {
  return (
    <div className="container">
      <div className="banner">
        <span className="big">Clicky Cats</span>
        Click on images to earn points. Don't click an image more than once!
      </div>
      <div className="pictureBox">{props.children}</div>
    </div>
  );
};
export default Wrapper;
