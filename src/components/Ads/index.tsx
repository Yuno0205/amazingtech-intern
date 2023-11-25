import { Flex } from "antd";
import styles from "./Ads.module.css";
import ButtonCustom from "../ButtonCustom";

function Ads() {
  return (
    <div className={styles.wrapper}>
      <Flex
        vertical
        justify="center"
        align="center"
        className={styles.container}
      >
        <h4>Định hướng và Chuẩn hoá lộ trình học tập</h4>
        <h2>Học Thật, Dự Án Thật, Mentor Tận Tâm</h2>

        <div className={styles.actions}>
          <ButtonCustom size="medium">Danh sách khóa học</ButtonCustom>
          <ButtonCustom size="medium">Tư vấn lộ trình</ButtonCustom>
        </div>
      </Flex>
    </div>
  );
}

export default Ads;
