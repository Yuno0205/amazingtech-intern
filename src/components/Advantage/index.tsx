import { Flex } from "antd";
import styles from "./Advantage.module.css";
import {
  CheckCircleOutlined,
  FireFilled,
  FireOutlined,
  LikeOutlined,
  QrcodeOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";

function Advantage() {
  return (
    <div>
      <Flex vertical align="center" className={styles.container}>
        <h2 className={styles.title}>Điểm ưu việt tại BSmart</h2>

        <Flex
          align="center"
          style={{ fontSize: "2.2rem", marginBottom: "20px" }}
          className={styles.info}
        >
          <div className={styles.item}>
            <Flex vertical>
              <Flex align="center" className={styles.header}>
                <CheckCircleOutlined />
                <h4>Học theo lộ trình, có định hướng</h4>
              </Flex>
              <div className={styles.content}>
                <span>
                  BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm
                  phát triển năng lực và niềm đam mê lập trình của bạn để có
                  việc ngay sau khi học.
                </span>
              </div>
            </Flex>
          </div>
          <div className={styles.item}>
            <Flex vertical>
              <Flex align="center" className={styles.header}>
                <SettingOutlined />
                <h4>Nền tảng cốt lõi trong lập trình</h4>
              </Flex>
              <div className={styles.content}>
                <span>
                  BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất
                  trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ
                  và môi trường làm việc.
                </span>
              </div>
            </Flex>
          </div>
          <div className={styles.item}>
            <Flex vertical>
              <Flex align="center" className={styles.header}>
                <FireFilled />
                <h4>Mài giũa bạn qua thực tế</h4>
              </Flex>
              <div className={styles.content}>
                <span>
                  Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự
                  án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm
                  "máu lửa" cho bạn.
                </span>
              </div>
            </Flex>
          </div>
        </Flex>

        <Flex
          align="center"
          style={{ fontSize: "2.2rem", marginBottom: "20px" }}
          className={styles.info}
        >
          <div className={styles.item}>
            <Flex vertical>
              <Flex align="center" className={styles.header}>
                <TeamOutlined />
                <h4>Mentor tận tâm</h4>
              </Flex>
              <div className={styles.content}>
                <span>
                  Bạn sẽ được giao dự án và Teamwork từ ngày đầu tiên. Được
                  Mentor hỗ trợ tận tâm, nhiệt tình.
                </span>
              </div>
            </Flex>
          </div>
          <div className={styles.item}>
            <Flex vertical>
              <Flex align="center" className={styles.header}>
                <QrcodeOutlined />
                <h4>Công nghệ mới, thực tế</h4>
              </Flex>
              <div className={styles.content}>
                <span>
                  Bạn được học và trải nghiệm các công nghệ lập trình mới nhất,
                  chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh
                  nghiệp.
                </span>
              </div>
            </Flex>
          </div>
          <div className={styles.item}>
            <Flex vertical>
              <Flex align="center" className={styles.header}>
                <LikeOutlined />
                <h4>Trao tay chìa khóa thành công</h4>
              </Flex>
              <div className={styles.content}>
                <span>
                  Hướng dẫn viết CV, phỏng vấn. Kết nối, gặp gỡ, phỏng vấn cùng
                  doanh nghiệp ngay sau khi tốt nghiệp.
                </span>
              </div>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </div>
  );
}

export default Advantage;
