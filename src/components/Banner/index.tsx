import { Button, Flex } from "antd";
import ButtonCustom from "../ButtonCustom";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4>Khởi đầu sự nghiệp của bạn</h4>
        <h2>Trở thành lập trình viên chuyên nghiệp tại BSMART</h2>
        <p>
          Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa
          học chất lượng. BSMART sẽ giúp các bạn có định hướng về nghề nghiệp và
          phát triển bản thân trên con đường trở thành lập trình viên chuyên
          nghiệp
        </p>

        <Flex justify="center" style={{ marginTop: "3rem" }}>
          <div style={{ width: "200px" }}>
            <ButtonCustom backgroundColor="#ff630e" textColor="#fff">
              Xem khóa học
            </ButtonCustom>
          </div>
        </Flex>
      </div>
    </div>
  );
}

export default Banner;
