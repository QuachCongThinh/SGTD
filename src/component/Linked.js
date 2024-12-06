import React from "react";
import "../styles/Linked.scss";
import "../styles/Reset.scss";
import bhxh from "../assets/bhxh.png";
const Linked = () => {
  return (
    <div className="linked">
      <h2>Website Liên Kết</h2>
      <div className="logo-link">
        <a
          href="https://baohiemxahoi.gov.vn/Pages/default.aspx"
          target="_blank"
        >
          <img src={bhxh} />
        </a>
      </div>
    </div>
  );
};
export default Linked;
