import { Flex } from "antd";
import styles from "./Learning.module.css";

function LearningPath() {
  return (
    <>
      <Flex style={{ margin: "40px 0" }} className={styles.container}>
        <div className={styles.item}>
          <div className={styles.content}>
            <h2>Trái ngành</h2>
            <p>From Zero to Hero</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h2>ĐÃ BIẾT LẬP TRÌNH</h2>
            <p>Đã có kiến thức tư duy lập trình và OOP</p>
          </div>
        </div>
      </Flex>
    </>
  );
}

export default LearningPath;
