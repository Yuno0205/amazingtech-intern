import { Avatar, Button, Card, Flex, Image, Rate } from "antd";
import Container from "../Layout/Container";
import styles from "./CourseInfo.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import coursesData, { Course } from "../../api/course";
import BreadCrumb from "../BreadCrumb";
import RoadMap from "../RoadMap/RoadMap";
import accounting from "accounting";

function CourseInfo() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const selectedCourse = coursesData.find((c) => c.id === id);

    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [coursesData, id]);

  console.log(course);

  return (
    <div className={styles.wrapper}>
      <BreadCrumb />
      {course ? (
        <Container>
          <Flex style={{ marginTop: "30px" }}>
            <Flex vertical flex={2} className={styles.content}>
              <Flex className={styles.item} justify="space-between">
                <Flex align="center">
                  <Avatar size={"large"} src={course.mentor.image} />
                  <p
                    style={{
                      fontWeight: 700,
                      marginLeft: 10,
                      fontSize: "1.6rem",
                    }}
                  >
                    <span style={{ color: "#999", fontWeight: "500" }}>
                      {" "}
                      bởi{" "}
                    </span>{" "}
                    Mentor {course.mentor.name}
                  </p>
                </Flex>
                <Flex>
                  <Rate
                    style={{ marginRight: 10 }}
                    value={course.rate}
                    disabled
                  />
                  <p className={styles.text}> (6) Đánh giá</p>
                </Flex>
              </Flex>

              <Flex
                className={styles.item}
                justify="space-between"
                align="center"
              >
                <Flex align="center">
                  <p className={styles.text}>Lĩnh vực: </p>
                  <span
                    className={styles.text}
                    style={{ marginLeft: 10, color: "#999" }}
                  >
                    {course.field}
                  </span>
                </Flex>
                <Flex align="center">
                  <p className={styles.text}>Cấp độ: {course.level}</p>
                  <Image
                    preview
                    width={"80px"}
                    src={
                      course.level === "Easy"
                        ? "https://bsmart.edu.vn/files/Levels/1/ant-icon-01.webp"
                        : course.level === "Medium"
                        ? "https://bsmart.edu.vn/files/Levels/1/ant-icon-02.webp"
                        : course.level === "Hard"
                        ? "https://bsmart.edu.vn/files/Levels/1/ant-icon-03.webp"
                        : "https://bsmart.edu.vn/files/Levels/1/ant-icon-default.webp"
                    }
                  />
                </Flex>
                <div></div>
              </Flex>

              <Flex
                className={styles.item}
                justify="space-between"
                align="center"
              >
                <Flex align="center">
                  <p className={styles.colorText}>
                    Số lượng học viên đăng kí: {course.countParticipant}
                  </p>
                </Flex>
                <Flex align="center">
                  <p className={styles.colorText}>Số lượng lớp đang mở: 0</p>
                </Flex>
                <Flex>
                  <p className={styles.colorText}>
                    Ngày khai giảng lớp mới: Hiện chưa có
                  </p>
                </Flex>
              </Flex>

              <hr style={{ margin: "20px 0" }} />

              <Flex vertical>
                <h3 className={styles.title}>Miêu tả khóa học</h3>
                <p className={styles.text}>{course.courseDescription}</p>
              </Flex>

              <Flex vertical style={{ marginTop: 20 }}>
                <h3 className={styles.title}>Lộ trình khóa học</h3>
                <RoadMap
                  items={[
                    "Lập trình hướng đối tượng trong Java",
                    "Phương thức main trong Java",
                    "Hướng đối tượng là gì, Object (Class) trong lập trình hướng đối tượng",
                    "Các loại phạm vi truy cập trong lập trình hướng đối tượng",
                  ]}
                  title="Module 1: Giới thiệu"
                />
              </Flex>
            </Flex>
            <Flex flex={1} className={styles.time}>
              <Card
                className={styles.cardContent}
                style={{ margin: "0 10px" }}
                cover={
                  <img
                    alt="Khóa học"
                    src={course.courseImage}
                    style={{
                      position: "relative",

                      objectFit: "fill",
                      borderRadius: "10px",
                    }}
                  />
                }
              >
                <Flex
                  vertical
                  justify="center"
                  align="center"
                  className={styles.cardInfo}
                >
                  <h1>{accounting.formatNumber(course.price)} VND</h1>

                  <span className={styles.title}>Danh sách lớp học</span>

                  <Card className={styles.classInfo}>
                    <Flex vertical>
                      <Flex>
                        <p
                          style={{ marginRight: 15, fontWeight: 600 }}
                          className={styles.text}
                        >
                          Mã lớp:
                        </p>
                        <p className={styles.colorText}>210</p>
                      </Flex>

                      <Flex>
                        <p
                          style={{ marginRight: 15, fontWeight: 600 }}
                          className={styles.text}
                        >
                          Thời gian:
                        </p>
                        <p className={styles.colorText}>
                          19:00 - 21:00 ( T5, T7 )
                        </p>
                      </Flex>

                      <Flex>
                        <p
                          style={{ marginRight: 15, fontWeight: 600 }}
                          className={styles.text}
                        >
                          Dự kiến mở lớp:
                        </p>
                        <p className={styles.colorText}>28/03/2023</p>
                      </Flex>

                      <Flex>
                        <p
                          style={{ marginRight: 15, fontWeight: 600 }}
                          className={styles.text}
                        >
                          Buổi học:
                        </p>
                        <p className={styles.colorText}>18 buổi</p>
                      </Flex>

                      <Flex>
                        <p
                          style={{ marginRight: 15, fontWeight: 600 }}
                          className={styles.text}
                        >
                          Số lượng học viên:
                        </p>
                        <p className={styles.colorText}>14</p>
                      </Flex>

                      <Flex>
                        <p
                          style={{ marginRight: 15, fontWeight: 600 }}
                          className={styles.text}
                        >
                          Hình thức:
                        </p>
                        <p className={styles.colorText}>Offline</p>
                      </Flex>

                      <Button
                        style={{
                          marginTop: 20,
                          backgroundColor: "#778899",
                          color: "#fff",
                          border: "1px solid #778899",
                        }}
                      >
                        Đã bắt đầu
                      </Button>
                    </Flex>
                  </Card>

                  <Card className={styles.classInfo}>
                    <Flex vertical>
                      <Flex>
                        <p
                          style={{ marginRight: 15, fontWeight: 600 }}
                          className={styles.text}
                        >
                          Mã lớp:
                        </p>
                        <p className={styles.colorText}>210</p>
                      </Flex>

                      <Flex>
                        <p
                          style={{ marginRight: 15, fontWeight: 600 }}
                          className={styles.text}
                        >
                          Thời gian:
                        </p>
                        <p className={styles.colorText}>
                          19:00 - 21:00 ( T5, T7 )
                        </p>
                      </Flex>

                      <Flex>
                        <p
                          style={{ marginRight: 15, fontWeight: 600 }}
                          className={styles.text}
                        >
                          Dự kiến mở lớp:
                        </p>
                        <p className={styles.colorText}>28/03/2023</p>
                      </Flex>

                      <Flex>
                        <p
                          style={{ marginRight: 15, fontWeight: 600 }}
                          className={styles.text}
                        >
                          Buổi học:
                        </p>
                        <p className={styles.colorText}>18 buổi</p>
                      </Flex>

                      <Flex>
                        <p
                          style={{ marginRight: 15, fontWeight: 600 }}
                          className={styles.text}
                        >
                          Số lượng học viên:
                        </p>
                        <p className={styles.colorText}>14</p>
                      </Flex>

                      <Flex>
                        <p
                          style={{ marginRight: 15, fontWeight: 600 }}
                          className={styles.text}
                        >
                          Hình thức:
                        </p>
                        <p className={styles.colorText}>Offline</p>
                      </Flex>

                      <Button
                        style={{
                          marginTop: 20,
                          backgroundColor: "#778899",
                          color: "#fff",
                          border: "1px solid #778899",
                        }}
                      >
                        Đã bắt đầu
                      </Button>
                    </Flex>
                  </Card>
                </Flex>
              </Card>
            </Flex>
          </Flex>
        </Container>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default CourseInfo;
