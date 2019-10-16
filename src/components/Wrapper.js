import React from "react";
import "../assets/css/main.css";

const Wrapper = props => {
  return (
    <div className="container">
      <div
        className="banner"
        style={{
          textAlign: "center",
          justifyContent: "center",
          fontSize: "20px",
          color: "#fff",
          backgroundColor: "#333"
        }}
      >
        <span className="big"></span>
        Click on images to earn points. Don't click an image more than once!
      </div>
      <div
        className="pictureBox"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          backgroundImage:
            "url('https://images.pexels.com/photos/1798642/pexels-photo-1798642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
          backgroundSize: "cover",
          height: "960px",
          padding: "30px",
          // maxHeight: "300px",
          minHeight: "1116px"
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
export default Wrapper;
