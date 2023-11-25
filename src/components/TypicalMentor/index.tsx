import { Avatar, Card, Flex } from "antd";
import styles from "./TypicalMentor.module.css";
import Carousel from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TypicalMentor() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mentor tiêu biểu</h2>
      <Carousel {...settings} dots>
        <div className={styles.item}>
          <Card
            hoverable
            style={{ width: 300, marginTop: 16 }}
            cover={
              <img
                alt="mentor"
                src={"https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp"}
                style={{ height: "200px" }}
              />
            }
          >
            <Flex vertical justify="center" align="center">
              <h2 className={styles.mentorTitle}>Đỗ Minh Quân</h2>
              <p className={styles.truncate}>
                Tôi tên là Đỗ Minh Quân, tốt nghiệp ngành công nghệ thông tin,
                chuyên ngành công nghệ phần mềm. Tôi là một lập trình viên
                Front-end có hơn 3 năm kinh nghiệm trong việc phát triển giao
                diện cho các trang web và ứng dụng di động. Tôi đã từng tham gia
                các dự án với công nghệ HTML, CSS, JavaScript, React ... và từ
                đó tích lũy được nhiều kiến thức, kinh nghiệm trong lĩnh vực
                này. Tôi muốn chia sẻ kiến thức của mình cho những người mới bắt
                đầu, giúp họ có thể nhanh chóng tiếp cận và đạt được thành công
                trong lĩnh vực lập trình Front-end.
              </p>
            </Flex>
          </Card>
        </div>
        <div className={styles.item}>
          <Card
            hoverable
            style={{ width: 300, marginTop: 16 }}
            cover={
              <img
                alt="mentor"
                src={"https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp"}
                style={{ height: "200px" }}
              />
            }
          >
            <Flex vertical justify="center" align="center">
              <h2 className={styles.mentorTitle}>Đỗ Minh Quân</h2>
              <p className={styles.truncate}>
                Tôi tên là Đỗ Minh Quân, tốt nghiệp ngành công nghệ thông tin,
                chuyên ngành công nghệ phần mềm. Tôi là một lập trình viên
                Front-end có hơn 3 năm kinh nghiệm trong việc phát triển giao
                diện cho các trang web và ứng dụng di động. Tôi đã từng tham gia
                các dự án với công nghệ HTML, CSS, JavaScript, React ... và từ
                đó tích lũy được nhiều kiến thức, kinh nghiệm trong lĩnh vực
                này. Tôi muốn chia sẻ kiến thức của mình cho những người mới bắt
                đầu, giúp họ có thể nhanh chóng tiếp cận và đạt được thành công
                trong lĩnh vực lập trình Front-end.
              </p>
            </Flex>
          </Card>
        </div>
        <div className={styles.item}>
          <Card
            hoverable
            style={{ width: 300, marginTop: 16 }}
            cover={
              <img
                alt="mentor"
                src={"https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp"}
                style={{ height: "200px" }}
              />
            }
          >
            <Flex vertical justify="center" align="center">
              <h2 className={styles.mentorTitle}>Đỗ Minh Quân</h2>
              <p className={styles.truncate}>
                Tôi tên là Đỗ Minh Quân, tốt nghiệp ngành công nghệ thông tin,
                chuyên ngành công nghệ phần mềm. Tôi là một lập trình viên
                Front-end có hơn 3 năm kinh nghiệm trong việc phát triển giao
                diện cho các trang web và ứng dụng di động. Tôi đã từng tham gia
                các dự án với công nghệ HTML, CSS, JavaScript, React ... và từ
                đó tích lũy được nhiều kiến thức, kinh nghiệm trong lĩnh vực
                này. Tôi muốn chia sẻ kiến thức của mình cho những người mới bắt
                đầu, giúp họ có thể nhanh chóng tiếp cận và đạt được thành công
                trong lĩnh vực lập trình Front-end.
              </p>
            </Flex>
          </Card>
        </div>
        <div className={styles.item}>
          <Card
            hoverable
            style={{ width: 300, marginTop: 16 }}
            cover={
              <img
                alt="mentor"
                src={"https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp"}
                style={{ height: "200px" }}
              />
            }
          >
            <Flex vertical justify="center" align="center">
              <h2 className={styles.mentorTitle}>Đỗ Minh Quân</h2>
              <p className={styles.truncate}>
                Tôi tên là Đỗ Minh Quân, tốt nghiệp ngành công nghệ thông tin,
                chuyên ngành công nghệ phần mềm. Tôi là một lập trình viên
                Front-end có hơn 3 năm kinh nghiệm trong việc phát triển giao
                diện cho các trang web và ứng dụng di động. Tôi đã từng tham gia
                các dự án với công nghệ HTML, CSS, JavaScript, React ... và từ
                đó tích lũy được nhiều kiến thức, kinh nghiệm trong lĩnh vực
                này. Tôi muốn chia sẻ kiến thức của mình cho những người mới bắt
                đầu, giúp họ có thể nhanh chóng tiếp cận và đạt được thành công
                trong lĩnh vực lập trình Front-end.
              </p>
            </Flex>
          </Card>
        </div>
        <div className={styles.item}>
          <Card
            hoverable
            style={{ width: 300, marginTop: 16 }}
            cover={
              <img
                alt="mentor"
                src={"https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp"}
                style={{ height: "200px" }}
              />
            }
          >
            <Flex vertical justify="center" align="center">
              <h2 className={styles.mentorTitle}>Đỗ Minh Quân</h2>
              <p className={styles.truncate}>
                Tôi tên là Đỗ Minh Quân, tốt nghiệp ngành công nghệ thông tin,
                chuyên ngành công nghệ phần mềm. Tôi là một lập trình viên
                Front-end có hơn 3 năm kinh nghiệm trong việc phát triển giao
                diện cho các trang web và ứng dụng di động. Tôi đã từng tham gia
                các dự án với công nghệ HTML, CSS, JavaScript, React ... và từ
                đó tích lũy được nhiều kiến thức, kinh nghiệm trong lĩnh vực
                này. Tôi muốn chia sẻ kiến thức của mình cho những người mới bắt
                đầu, giúp họ có thể nhanh chóng tiếp cận và đạt được thành công
                trong lĩnh vực lập trình Front-end.
              </p>
            </Flex>
          </Card>
        </div>
      </Carousel>
    </div>
  );
}

export default TypicalMentor;
