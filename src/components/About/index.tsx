import { Flex } from "antd";
import styles from "./About.module.css";
import BannerImg from "../../assets/images/banner-2.webp";
import ButtonCustom from "../ButtonCustom";

function About() {
  return (
    <Flex vertical align="center" className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Về chúng tôi</h2>

        <Flex className={styles.about}>
          <div className={styles.info}>
            <p>
              BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy về
              đào tạo lập trình viên, kết nối Mentor và Mentee. Với đội ngũ
              Mentor giàu kinh nghiệm và chuyên môn, BSMART cam kết mang đến các
              khóa học lập trình chất lượng nhất. Hệ thống khóa học đa dạng và
              linh hoạt, từ cơ bản đến nâng cao, giúp học viên có thể lựa chọn
              các khóa học phù hợp với nhu cầu và khả năng của mình. BSMART cập
              nhật và áp dụng những công nghệ mới, giúp học viên và Mentor được
              tiếp cận với những kiến thức và kỹ năng mới nhất trong lập trình.
              Bên cạnh đó, BSMART luôn đặt sự quan tâm, hỗ trợ học viên trong
              quá trình học tập và phát triển sự nghiệp sau khi tốt nghiệp.
            </p>

            <Flex justify="center" style={{ marginTop: "20px" }}>
              <ButtonCustom backgroundColor="#ff630e" textColor="#fff">
                Xem khóa học
              </ButtonCustom>
              <ButtonCustom>Hỗ trợ tư vấn</ButtonCustom>
            </Flex>
          </div>
          <div className={styles.info}>
            <img src={BannerImg} />
          </div>
        </Flex>
      </div>
    </Flex>
  );
}

export default About;
