import React from "react";
import "../styles/Banner.scss";
import "../styles/Reset.scss";
import Slider from "react-slick";
import slider1 from "../assets/slide-1.jpg";
import slider2 from "../assets/slide-2.jpg";
import slider3 from "../assets/sldie-3.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
const Banner = () => {
  var settings = {
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  const googleMapsUrl =
    "https://www.google.com/maps?q=9.13706840099786,105.12877585994333";

  return (
    <div className="banner">
      <div className="text-banner">
        <h3>PHÒNG KHÁM ĐA KHOA</h3>
        <strong>SÀI GÒN TÂM ĐỨC</strong>
      </div>
      <div className="form">
        <div className="workTime">
          <h4>GIỜ LÀM VIỆC</h4>
          <div className="content">
            <p>Thứ 2</p>
            <IoIosArrowRoundForward />
            <p>Chủ nhật</p>
          </div>
          <span>Từ 6:30 đến 17:00</span>
        </div>
        <div className="address">
          <h4>ĐỊA CHỈ LIÊN HỆ</h4>
          <div className="content">
            <p>
              Số 153A, Đường Nguyễn Tất Thành, Ấp Bà Điều, Xã Lý Văn Lâm, Tp.Cà Mau
            </p>
            <button onClick={() => window.open(googleMapsUrl, "_blank")}>
              Xem bản đồ
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <Slider {...settings}>
        <img src={slider1} alt="Slider" />
        <img src={slider2} alt="Slider" />
        <img src={slider3} alt="Slider" />
      </Slider>
    </div>
  );
};
export default Banner;
