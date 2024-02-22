import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import img1 from "../../assets/img-10.png";

const DetailsVideoCard = ({ data, handleOnClick }) => {
  console.log(data, "ln data");
  return (
    <div className="Detail-video-card-main-box" onClick={handleOnClick}>
      <div className="Detail-video-card">
        <img
          src={data ? data.image : img1}
          alt="img1"
          className="Detail-video-card-img"
        />
        <div className="Detail-video-card-length">
          <BsPlayCircle style={{ marginRight: "3px" }} /> 8:15
        </div>
      </div>
      <div className="Detail-video-card-text">
        {data
          ? data.title
          : "Enhancing Health Accessibility With ‘Ayushman Bhav’ Initiative patients free"}
      </div>
    </div>
  );
};
export default DetailsVideoCard;
