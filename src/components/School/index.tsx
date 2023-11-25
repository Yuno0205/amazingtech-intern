import { Flex, Image } from "antd";
import styles from "./School.module.css";
import VanLang from "../../assets/images/logo-dai-hoc-01.webp";

import Carousel from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function School() {
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className={styles.wrapper}>
      <Flex vertical align="center">
        <div className={styles.title}>
          <h5>Nhận được sự tin tưởng của các đối tác</h5>
        </div>

        <div className={styles.container}>
          <Carousel {...settings} dots>
            <div className={styles.item}>
              <Image width={"100%"} preview={false} src={VanLang} />
            </div>
            <div className={styles.item}>
              <Image width={"100%"} preview={false} src={VanLang} />
            </div>
            <div className={styles.item}>
              <Image width={"100%"} preview={false} src={VanLang} />
            </div>
            <div className={styles.item}>
              <Image width={"100%"} preview={false} src={VanLang} />
            </div>
            <div className={styles.item}>
              <Image width={"100%"} preview={false} src={VanLang} />
            </div>
          </Carousel>
        </div>
      </Flex>
    </div>
  );
}

export default School;
