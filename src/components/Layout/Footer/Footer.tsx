import { Flex, Image } from "antd";
import styles from "./Footer.module.css";
import Logo from "../../../assets/images/icon-logo-footer.webp";
import Container from "../Container";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Location from "../../../assets/icons/icon-location.webp";
import Gmail from "../../../assets/icons/icon-gmail.webp";
import Phone from "../../../assets/icons/icon-phone.webp";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Flex vertical>
          <Flex className={styles.container}>
            <Flex
              className={styles.info1}
              flex={2}
              vertical
              style={{ paddingRight: "20px" }}
            >
              <div className={styles.logo}>
                <Image preview={false} src={Logo} />
              </div>

              <p>
                Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các
                kỹ năng lập trình của bạn. Tất cả các mentor của chúng tôi đều
                có nhiều kinh nghiệm trong thực tế và giảng dạy.
              </p>

              <h6>Theo dõi chúng tôi tại:</h6>

              <Flex>
                <Flex style={{ marginRight: "15px" }}>
                  <FacebookOutlined />
                </Flex>
                <Flex style={{ marginRight: "15px" }}>
                  <InstagramOutlined />
                </Flex>
                <Flex style={{ marginRight: "15px" }}>
                  <YoutubeOutlined />
                </Flex>
              </Flex>
            </Flex>
            <Flex className={styles.info2} flex={1} vertical>
              <h4 className={styles.title}>Menu</h4>

              <Link className={styles.text} to="/">
                Trang chủ
              </Link>
              <Link className={styles.text} to="/">
                Về chúng tôi
              </Link>
              <Link className={styles.text} to="/">
                Nền tảng LMS
              </Link>
              <Link className={styles.text} to="/">
                Khóa học STEM
              </Link>
              <Link className={styles.text} to="/">
                Khóa học
              </Link>
              <Link className={styles.text} to="/">
                Mentor
              </Link>
              <Link className={styles.text} to="/">
                Blog
              </Link>
            </Flex>
            <Flex
              className={styles.info3}
              flex={1}
              vertical
              justify="space-between"
            >
              <Flex vertical>
                <h4 className={styles.title}>Điều khoản</h4>

                <Link className={styles.text} to="/">
                  Chính sách bảo mật
                </Link>

                <Link className={styles.text} to="/">
                  Điều khoản dịch vụ
                </Link>
              </Flex>
              <Flex vertical>
                <h4 className={styles.title}>Cộng tác viên</h4>

                <Link className={styles.text} to="/">
                  Đăng kí cộng tác viên
                </Link>

                <Link className={styles.text} to="/">
                  Đăng kí Mentor
                </Link>
              </Flex>
            </Flex>
            <Flex className={styles.info4} vertical flex={2}>
              <h4 className={styles.title}>Liên hệ với chúng tôi</h4>

              <Flex align="center">
                <Image
                  preview={false}
                  className={styles.image}
                  src={Location}
                />
                <Link to="">
                  <span>Tòa S9.02A, Vinhomes Grand Park, TP.Thủ Đức</span>
                </Link>
              </Flex>

              <Flex align="center">
                <Image preview={false} className={styles.image} src={Gmail} />
                <Link to="">
                  <span>admin@bsmart.edu.vn</span>
                </Link>
              </Flex>

              <Flex align="center">
                <Image preview={false} className={styles.image} src={Phone} />
                <span>
                  <Link to="/">028 9999 79 39</Link>
                </span>
              </Flex>
            </Flex>
          </Flex>
          <Flex justify="center" className={styles.under}>
            <span>
              © Bản quyền BSmart 2023 - Empowered by BSmart - version 1.1.13
            </span>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default Footer;
