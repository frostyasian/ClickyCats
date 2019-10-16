import React from "react";

const Header = ({ topScore, currentScore, message }) => {
  return (
    <header
      style={{
        textAlign: "center",
        justifyContent: "center",
        fontSize: "20px",
        background: "#333",
        color: "#fff"
      }}
    >
      <div className="brand ">Clicky Cats</div>
      <div className="message">{message}</div>
      <div className="scores">
        Score:&emsp; {currentScore} &emsp; | &emsp;Top Score:&emsp; {topScore}
      </div>
    </header>
  );
};

export default Header;
