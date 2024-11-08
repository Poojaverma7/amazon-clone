import React from "react";
import "./HomeBanner.css";
import homeBannerItemProduct from "../../../homeProduct.json";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img
        className="homeBannerimg"
        src="https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg"
        alt="HomeBanner"
      />
      <div className="grayBackgroundHomeBanner"></div>

      <div className="homeBannerItemDiv">
        {homeBannerItemProduct.product.map((item, index) => {
          return (
            <div className="homeBannerItemDivCard">
              <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
              <div className="imgHomeBannerItemDivCard">
                {
                  item.imgs.map((item,index)=>{
                    return(
                    <div className="imgBannerHomeDiv">
                      <img
                        className="imgBannerHomeDivImg"
                        src={item.imgSrc}
                        alt={item.imgAlt}
                      />
                      <div className="imgBannerImgName">{item.imgAlt}</div>
                    </div>
                    );
                  })
                }
                
              </div>
              <div className="seeMoreHomeBanner">See More</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HomeBanner;
