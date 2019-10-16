import React from "react";

const Picture = ({ gridArea, img, handleClick, index, id }) => {
  console.log(id, img);
  return (
    <div className={gridArea}>
      <img
        style={{
          display: "flex",
          height: "300px",
          width: "300px"
        }}
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
