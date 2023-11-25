import { Menu } from "antd";
import styles from "./MenuBar.module.css";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      className={styles.wrapper}
      theme="light"
      style={{ justifyContent: "center" }}
    >
      <Menu.Item key="1">
        <Link to="/">
          <h3 className={styles.route}>Trang chủ</h3>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/courses">
          <h3 className={styles.route}>Về chúng tôi</h3>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/courses">
          <h3 className={styles.route}>Khóa học STEM</h3>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/courses">
          <h3 className={styles.route}>Khóa học</h3>
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/">
          <h3 className={styles.route}>Mentor</h3>
        </Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="">
          <h3 className={styles.route}>Blog</h3>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default MenuBar;
