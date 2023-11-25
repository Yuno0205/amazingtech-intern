// import React, { useState, useEffect } from "react";
// import { Button, Dropdown, Flex, Pagination, Space, Select, Menu } from "antd";
// import CourseCard from "../../../Courses/CourseCard";
// import styles from "./SideBarContent.module.css";
// import { DownOutlined } from "@ant-design/icons";

// const { Option } = Select;

// function SideBarContent({ coursesData }: any) {
//   // const [sortedCourses, setSortedCourses] = useState<any[]>([]);
//   const [sortedCourses, setSortedCourses] = useState([...coursesData]);

//   const [sortType, setSortType] = useState("default");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentData = coursesData.slice(startIndex, endIndex);

//   const handleSortChange = (value: string) => {
//     setSortType(value);
//     var sortedCoursesCopy = [...coursesData];

//     if (value === "3") {
//       //  A-Z
//       sortedCoursesCopy.sort((a, b) =>
//         a.courseName.localeCompare(b.courseName)
//       );
//     } else if (value === "4") {
//       //  Z-A
//       sortedCoursesCopy.sort((a, b) =>
//         b.courseName.localeCompare(a.courseName)
//       );
//     } else if (value === "2") {
//       sortedCoursesCopy = sortedCoursesCopy.filter(
//         (course: any) => course.countParticipant > 100
//       );
//     }

//     setSortedCourses(sortedCoursesCopy);
//   };

//   const menuItems = [
//     { key: "1", label: "Khóa học mới nhất" },
//     { key: "2", label: "Khóa học nhiều người học" },

//     { key: "3", label: "A - Z" },
//     { key: "4", label: "Z - A" },
//   ];

//   useEffect(() => {
//     setSortedCourses([...coursesData]);
//   }, [coursesData]);

//   const menu = (
//     <Menu onClick={(e) => handleSortChange(e.key)}>
//       {menuItems.map((item) => (
//         <Menu.Item key={item.key}>{item.label}</Menu.Item>
//       ))}
//     </Menu>
//   );

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className={styles.wrapper}>
//       <Flex className={styles.filter} justify="space-between">
//         <h4 style={{ marginBottom: "20px" }}>
//           {sortedCourses.length} Khóa học
//         </h4>
//         <Dropdown overlay={menu}>
//           <Button>
//             <Space>
//               Sắp xếp khóa học
//               <DownOutlined />
//             </Space>
//           </Button>
//         </Dropdown>
//       </Flex>
//       <Flex wrap="wrap" className={styles.courses}>
//         {sortedCourses && sortedCourses.length ? (
//           sortedCourses.map((course: any, index: any) => (
//             <div key={index} className={styles.item}>
//               <CourseCard course={course} />
//             </div>
//           ))
//         ) : (
//           <div>No courses found !</div>
//         )}
//       </Flex>
//       <Pagination
//         current={currentPage}
//         total={sortedCourses.length}
//         pageSize={itemsPerPage}
//         onChange={handlePageChange}
//       />
//     </div>
//   );
// }

// export default SideBarContent;

import React, { useState, useEffect } from "react";
import { Button, Dropdown, Flex, Pagination, Space, Select, Menu } from "antd";
import CourseCard from "../../../Courses/CourseCard";
import styles from "./SideBarContent.module.css";
import { DownOutlined } from "@ant-design/icons";

const { Option } = Select;

function SideBarContent({ coursesData }: any) {
  const [sortedCourses, setSortedCourses] = useState([...coursesData]);
  const [sortType, setSortType] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedCourses.slice(startIndex, endIndex);

  const handleSortChange = (value: string) => {
    setSortType(value);
    var sortedCoursesCopy = [...coursesData];

    if (value === "3") {
      // A-Z
      sortedCoursesCopy.sort((a, b) =>
        a.courseName.localeCompare(b.courseName)
      );
    } else if (value === "4") {
      // Z-A
      sortedCoursesCopy.sort((a, b) =>
        b.courseName.localeCompare(a.courseName)
      );
    } else if (value === "2") {
      sortedCoursesCopy = sortedCoursesCopy.filter(
        (course: any) => course.countParticipant > 100
      );
    }

    setSortedCourses(sortedCoursesCopy);
    // Cập nhật currentPage về 1 khi có sự thay đổi sắp xếp
    setCurrentPage(1);
  };

  const menuItems = [
    { key: "1", label: "Khóa học mới nhất" },
    { key: "2", label: "Khóa học nhiều người học" },
    { key: "3", label: "A - Z" },
    { key: "4", label: "Z - A" },
  ];

  useEffect(() => {
    setSortedCourses([...coursesData]);
  }, [coursesData]);

  const menu = (
    <Menu onClick={(e) => handleSortChange(e.key)}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.wrapper}>
      <Flex className={styles.filter} justify="space-between">
        <h4 style={{ marginBottom: "20px" }}>
          {sortedCourses.length} Khóa học
        </h4>
        <Dropdown overlay={menu}>
          <Button>
            <Space>
              Sắp xếp khóa học
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Flex>
      <Flex wrap="wrap" className={styles.courses}>
        {currentData && currentData.length ? (
          currentData.map((course: any, index: any) => (
            <div key={index} className={styles.item}>
              <CourseCard course={course} />
            </div>
          ))
        ) : (
          <div>No courses found!</div>
        )}
      </Flex>
      <Pagination
        current={currentPage}
        total={sortedCourses.length}
        pageSize={itemsPerPage}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default SideBarContent;
