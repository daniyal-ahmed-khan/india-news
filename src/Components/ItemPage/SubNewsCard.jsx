import React from "react";
import img from "../../assets/SubNewsImg.png";
import "./style/index.css";
import { BsPlayCircle } from 'react-icons/bs'

const SubNewsCard = ({ data, handleOnClick ,isVideo}) => {
  return (
    <div
    onClick={handleOnClick}
      className="sub-News-area-1-img-main"
      style={{ width: "100%", height: "100px" }}
    >
      <div className="sub-News-area-1-img">
      <img src={data ? data.image : img} alt="img"  />
      <div>
     {isVideo?<> <div className="item-video-card-length">
          <BsPlayCircle style={{ marginRight: "3px" }} /> 8:15
        </div></>:<></>}
      </div>
      </div>
      <div className="sub-News-area-1-text">
      {" "}
            {data
              ? data.title
              : "The high court upheld a trial court's judgement which had declared the Muslim According to the"}
      </div>
    </div>
  );
};

export default SubNewsCard;
