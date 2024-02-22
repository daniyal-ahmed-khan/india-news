import React from "react";
import "./style/index.css";
import img from "../../assets/Rectangle 28.png";

const ItemPageNewsCard = ({ data, handleOnClick }) => {
  return (
    <>
      <div className="ItemPageNewsCard-main" onClick={handleOnClick}>
        <div>
          <img src={data ? data.image : img} alt="img" />
          <div>
            {" "}
            {data
              ? data.title
              : "Conference leader Mohd Akbar Lone, there are only two highly debatable issues"}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPageNewsCard;
