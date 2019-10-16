import React from "react";
import "../assets/css/pictures.css";

const Picture = ({ gridArea, img, handleClick, index, id }) => {
  console.log(id, img);
  return (
    <div className={gridArea}>
      <img
        src={img}
        className="picture-img"
        alt={img}
        onClick={() => {
          handleClick(id);
        }}
      />
    </div>
  );
};

export default Picture;
