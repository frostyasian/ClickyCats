import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#333",
        color: "#fff"
      }}
    >
      <div className="brand small">Clicky Cats</div>
      {/* <img src={logo} className="icon" alt="react logo" /> */}
    </footer>
  );
};

export default Footer;
