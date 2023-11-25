import { Flex, Image, Input, Space } from "antd";
import Container from "../Layout/Container";
import styles from "./TopHeader.module.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  SearchOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import MailIcon from "../../assets/icons/icon-gmail.webp";
import PhoneIcon from "../../assets/icons/icon-phone.webp";

function TopHeader() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Flex justify="space-between" align="center">
          <Flex>
            <FacebookOutlined style={{ marginRight: 15 }} />
            <InstagramOutlined style={{ marginRight: 15 }} />
            <YoutubeOutlined style={{ marginRight: 15 }} />
          </Flex>
          <Flex>
            <Flex>
              <Image preview={false} width={30} src={MailIcon} />
              <p style={{ marginRight: "30px" }}>admin@bsmart.edu.vn</p>
            </Flex>
            <Flex>
              <Image width={30} src={PhoneIcon} />
              <p>028 9999 79 39</p>
            </Flex>
          </Flex>
          <Flex className={styles.search} style={{ width: 400 }}>
            <Input
              placeholder="Tìm kiếm khóa học"
              suffix={<SearchOutlined style={{ color: "#1890ff" }} />}
            />
          </Flex>
          <Flex>
            <p>Đăng nhập </p>
            <p style={{ margin: "0 10px" }}>|</p>
            <p> Đăng kí</p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default TopHeader;
