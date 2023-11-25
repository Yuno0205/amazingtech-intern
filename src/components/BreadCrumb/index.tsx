import { Breadcrumb, Flex } from "antd";
import Container from "../Layout/Container";
import styles from "./BreadCrumb.module.css";

function BreadCrumb() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Flex vertical justify="center" align="center">
          <Flex className={styles.title}>
            <h1>Danh sách khóa học</h1>
          </Flex>
          <Flex className={styles.breadcrumb}>
            <Breadcrumb
              separator=""
              items={[
                {
                  href: "/",
                  title: "Trang chủ",
                },
                {
                  type: "separator",
                  separator: ">",
                },
                {
                  href: "",
                  title: "Khóa học",
                },
              ]}
            />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default BreadCrumb;
