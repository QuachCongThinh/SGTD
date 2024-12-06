import React, { useEffect, useRef } from "react";
import "../styles/Difference.scss";
import "../styles/Reset.scss";
import background from "../assets/medical-physician-doctor-man.jpg";
import icon1 from "../assets/icon-c1.png";
import icon2 from "../assets/icon-c2.png";
import icon3 from "../assets/icon-c3.png";
import icon4 from "../assets/icon-c4.png";
import icon5 from "../assets/icon-c5.png";
import icon6 from "../assets/icon-c6.png";

const Difference = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } 
    );

    const elements = textRef.current.querySelectorAll("h2, .icon-text");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="difference">
      <div className="image-wrapper">
        <img src={background} alt="Doctor" />
        <div className="overlay"></div>
      </div>
      <div className="text-difference" ref={textRef}>
        <h2>Sự Khác Biệt Ở Phòng Khám Của Chúng Tôi</h2>
        <div className="row">
          <div className="icon-text">
            <img src={icon3} alt="Icon" />
            <p>Bác sĩ chuyên môn giỏi</p>
            <img src={icon4} alt="Icon" />
            <p>Nhân viên chuyên nghiệp</p>
          </div>
          <div className="icon-text">
            <img src={icon5} alt="Icon" />
            <p>Phục vụ tận tâm</p>
            <img src={icon6} alt="Icon" />
            <p>Hơn 5000 khách hàng hài lòng</p>
          </div>
          <div className="icon-text">
            <img src={icon1} alt="Icon" />
            <p>Tư vấn miễn phí</p>
            <img src={icon2} alt="Icon" />
            <p>Giá cả phải chăng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;
