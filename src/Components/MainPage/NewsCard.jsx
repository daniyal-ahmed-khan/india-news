import React from "react";
import img from "../../assets/Rectangle 73.png";
import './style/index.css'

const NewsCard = ({ data,onPress }) => {
  return (
    <div className="news-card-mian-area" onClick={onPress}>
      <img src={data ? data?.image : img} alt="img" />
      <div className="news-card-main-area-text">
        {data
          ? data?.title
          : "Nternational Aid Arrives In Flood-Hit Libya As More Bodies Wash Ashore"}
      </div>
    </div>
  );
};

export default NewsCard;
