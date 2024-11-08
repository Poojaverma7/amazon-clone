import React from "react";
import "./HomeDetails.css";
import HomeScrollItems from "../../../homeScrollItems.json";

const HomeDetails = () => {
  return (
    <div className="homeDetails">
      <div className="homeDetailLongCard">
        <div className="homeDetailLongCardTitle">Today’s Deals</div>
        <div className="homeDetailLongCardItems">
          <div className="scrollDiv">
            {HomeScrollItems.map((item, index) => {
              return (
                <div className="homeDetailLongCardItem">
                  <img
                    className="homeDetailLongCardItemImg"
                    src={item.imgSrc}
                    alt={item.imgAlt}
                  />
                  <div className="homeDetailLongCardItemImgDetail">
                    <div className="homeDetailLongCardItemImgTopDetail">
                      <div className="homeDetailPercentageOff">
                        {item.topDetail.percentageOff}
                      </div>
                      <div className="limitedTimeDealhomeDetail">
                      {item.topDetail.limitedTimeDeal}
                      </div>
                    </div>
                    <div className="bottomHomeDetail">
                      {item.bottomDetail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
