import React from "react";
import "./footer.css";
import amazonLogo from "../../Assets/amazonLogo.png";
import FooterJson from "./footer.json";

const footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        {FooterJson.map((item, index) => {
          return (
            <div className="footerCont1" key={index}>
            <div className="contentFooterTitle">{item.title}</div>
            <div className="contentFooterSubTitlediv">
              {item.subTitles.map((item1, index1) => {
                return <div className="contentFooterSubTitleCont" key={index1}>{item1}</div>;
              })}
            </div>
          </div>
          )
        })}
      </div>
      <div className="amazonImg">
        <img className="amazonImgFooter" src={amazonLogo} alt="Amazon logo" />
      </div>
    </div>
  );
};

export default footer;
