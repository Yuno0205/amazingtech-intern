import { Card, Avatar, Flex, Rate } from "antd";
import styles from "./CourseCard.module.css";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import ButtonCustom from "../../ButtonCustom";
import { Link } from "react-router-dom";
import accounting from "accounting";

const CourseCard = ({ course }: any) => {
  return (
    <Card
      hoverable
      bordered
      //   loading
      style={{ margin: "0 10px" }}
      cover={
        <img
          alt="Khóa học"
          src={course.courseImage}
          style={{
            position: "relative",
            borderBottom: "1px solid #999",
            objectFit: "fill",
            borderRadius: "10px",
            minHeight: 200,
            maxHeight: 201,
          }}
        />
      }
    >
      <Flex vertical style={{ paddingTop: "2.5em", position: "relative" }}>
        <div className={styles.mentorAvatar}>
          <img src={course.mentor.image} />
        </div>
        <div className={styles.mentorIcon}>
          {/* <img src="https://bsmart.edu.vn/files/Levels/1/ant-icon-03.webp" /> */}
          <img
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
        </div>
        <h5 className={styles.title}>{course.courseName}</h5>
        <Flex>
          <p className={styles.mentor}>Mentor</p>
          <p className={styles.mentor}>{course.mentor.name}</p>
        </Flex>

        <Flex>
          <UserOutlined />
          <p
            style={{
              fontStyle: "italic",
              marginLeft: "10px",
              fontWeight: "500",
            }}
          >
            {course.countParticipant} học viên
          </p>
        </Flex>

        <div className={styles.description}>
          <p>{course.courseDescription}</p>
        </div>

        <Rate
          disabled
          defaultValue={course.rate}
          value={course.rate}
          style={{ margin: "10px 0" }}
        />

        <Flex align="center" style={{ marginBottom: "10px" }}>
          <span className={styles.price}>
            {accounting.formatNumber(course.price)}đ
          </span>

          <CalendarOutlined />
          <p
            style={{
              fontStyle: "italic",
              marginLeft: "10px",
              fontWeight: "500",
            }}
          >
            {course.countSession} buổi học
          </p>
        </Flex>

        <div style={{ width: "100%" }}>
          <ButtonCustom size="medium">
            <Link to={`/courses/${course.id}`}>Xem chi tiết</Link>
          </ButtonCustom>
        </div>
      </Flex>
    </Card>
  );
};

export default CourseCard;
