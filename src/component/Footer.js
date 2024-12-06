import React from "react";
import "../styles/Reset.scss";
import "../styles/Footer.scss";
import logoFooter from "../assets/Logo.png";
import map from "../assets/location-pin.png";
import phone from "../assets/call.png";
import email from "../assets/email.png";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tik-tok.png";
import viewer from "../assets/view.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logoFooter} />
      </div>
      <div className="contact">
        <h2>THÔNG TIN LIÊN HỆ</h2>
        <div className="icon-contact">
          <img src={map} alt="mapIcon" />
          <p>
            Địa chỉ: 153A, Đường Nguyễn Tất Thành, Ấp Bà Điều, Xã Lý Văn Lâm,
            TP. Cà Mau
          </p>
        </div>
        <div className="icon-contact">
          <img src={phone} alt="phoneIcon" />
          <p>0914.066.178</p>
        </div>
        <div className="icon-contact">
          <img src={email} alt="emailIcon" />
          <p>pkdksgtd@gmail.com</p>
        </div>
        <h2>KẾT NỐI MẠNG XÃ HỘI</h2>
        <div className="social">
          <a
            className="facebook"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61560007596752"
          >
            <img src={facebook} />
          </a>
          <a
            className="tiktok"
            target="_blank"
            href="https://www.tiktok.com/@pk.dk.sgtd?lang=en"
          >
            <img src={tiktok} />
          </a>
        </div>
      </div>
      <div className="service-difference">
        <h2>DỊCH VỤ KHÁC TẠI PHÒNG KHÁM</h2>
        <ul>
          <li>Khám, chữa bệnh</li>
          <li>Khám sức khỏe</li>
          <li>Chuẩn đoán hình ảnh</li>
          <li>Vật lý trị liệu</li>
        </ul>
        <div className="viewer">
          <img src={viewer} />
          <p>Lượt truy cập:</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
