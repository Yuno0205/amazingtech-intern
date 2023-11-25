import styles from "./Courses.module.css";
import CourseCard from "./CourseCard";
import Carousel from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import coursesData from "../../api/course";

interface CoursesProps {
  titleCourse: string;
}

function Courses({ titleCourse }: CoursesProps) {
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
      <h2>{titleCourse}</h2>
      <Carousel {...settings} dots>
        {/* <div>
          <CourseCard />
        </div> */}
        {coursesData.map((course, index) => (
          <div key={index}>
            <CourseCard course={course} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Courses;
