import React, { useEffect, useRef } from "react";
import "../styles/Service.scss";
import "../styles/Reset.scss";
import bg from "../assets/high-angle-stethoscope-blue-background.webp";
import ic1 from "../assets/icon-s1.png";
import ic7 from "../assets/icon-s7.png";
import ic3 from "../assets/icon-s3.png";
import ic4 from "../assets/icon-s4.png";
import ic5 from "../assets/icon-s5.png";
import ic6 from "../assets/icon-s6.png";

const Service = () => {
  const serviceRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };

    const callback = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 200);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    serviceRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="service">
      <div className="bg-service">
        <img src={bg} alt="Service" />
        <div className="overlay"></div>
      </div>
      <div className="text-service">
        <h2>Dịch Vụ Y Tế Của Chúng Tôi</h2>
        <h3>
          Mang đến trải nghiệm chăm sóc đáng tin cậy và đội ngũ chuyên gia tận
          tâm, giúp bạn sống một cuộc sống khỏe mạnh và tràn đầy năng lượng.
        </h3>
        <div className="list-service">
          {[
            {
              img: ic4,
              text: "Khám tổng quát",
              sub: "Là dịch vụ khám bệnh toàn diện mọi bộ phận, cơ quan trên cơ thể nhằm tầm soát bệnh lý",
            },
            {
              img: ic7,
              text: "Siêu âm",
              sub: "Là một phương pháp chẩn đoán hình ảnh có tầm quan trọng rất lớn trong lĩnh vực y tế, đặc biệt được ưa chuộng trong việc kiểm tra thai nhi và chẩn đoán các vấn đề sức khỏe khác",
            },
            {
              img: ic3,
              text: "Hồi sức cấp cứu",
              sub: "Là đơn vị chăm sóc tích cực những bệnh nhân đang trong tình trạng nguy kịch và cần được theo dõi, chăm sóc chuyên sâu, đặc biệt cần phải được hỗ trợ hô hấp rất phức tạp",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="box"
              ref={(el) => (serviceRef.current[index] = el)}
            >
              <img src={item.img} />
              <p>{item.text}</p>
              <h4>{item.sub}</h4>
            </div>
          ))}
        </div>
        <div className="list-service">
          {[
            {
              img: ic1,
              text: "Đo điện tim",
              sub: "Là một khảo sát cơ bản giúp ghi lại những hoạt động điện học của cơ tim",
            },
            {
              img: ic5,
              text: "Chụp X-Quang",
              sub: "Là kỹ thuật chẩn đoán bệnh lý dựa vào tia X – một dạng bức xạ điện từ. X-quang sử dụng một chùm tia X chiếu qua cơ thể để tạo hình ảnh các cấu trúc có vị trí, độ dày và tỷ trọng khác nhau bên trong cơ thể",
            },
            {
              img: ic6,
              text: "Xét nghiệm máu",
              sub: "Là xét nghiệm y tế thông thường, được sử dụng để đo lường hoặc kiểm tra khoáng chất có trong máu, tiểu cầu, đồng thời đánh giá các chất điện giải, protein và hormone",
            },
          ].map((item, index) => (
            <div
              key={index + 3}
              className="box"
              ref={(el) => (serviceRef.current[index + 3] = el)}
            >
              <img src={item.img} />
              <p>{item.text}</p>
              <h4>{item.sub}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
