import React from "react";
import "../styles/Header.scss";
import "../styles/Reset.scss";
import Logo from "../assets/Logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="infoHeader">
          <p>
            Hotline khẩn cấp <br />
            <span>0914.066.178</span>
          </p>
          <div className="logo">
            <img src={Logo} alt="Logo"/>
          </div>
          <div className="onlineConsultation">
            Tư vấn trực tuyến <br />
            <span>pkdksgtd@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
