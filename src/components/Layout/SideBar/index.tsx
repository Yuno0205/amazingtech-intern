import { Flex } from "antd";
import LeftSideBar from "./LeftSideBar";
import styles from "./SideBar.module.css";
import SideBarContent from "./SideBarContent";
import { useEffect, useState } from "react";
import coursesData from "../../../api/course";
import BreadCrumb from "../../BreadCrumb";

interface Course {
  courseName: string;
  level?: string;
}

interface Filters {
  level: string[];
  form: string[];
  field: string[];
}

function SideBar() {
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [filters, setFilters] = useState<Filters>({
    level: [],
    form: [],
    field: [],
  });

  const handleFilterChange = (newFilters: Filters) => {
    console.log("New filter", newFilters);

    setFilters(newFilters);
  };

  useEffect(() => {
    let result = coursesData;

    if (filters.level.length > 0) {
      result = result.filter(
        (course) =>
          typeof course.level === "string" &&
          filters.level.includes(course.level)
      );
    }

    if (filters.form.length > 0) {
      result = result.filter(
        (course) =>
          typeof course.form === "string" && filters.form.includes(course.form)
      );
    }

    if (filters.field.length > 0) {
      result = result.filter(
        (course) =>
          typeof course.field === "string" &&
          filters.field.includes(course.field)
      );
    }

    setFilteredCourses(result);
  }, [filters]);

  console.log(filteredCourses);

  return (
    <div>
      <BreadCrumb />
      <Flex className={styles.wrapper}>
        <LeftSideBar
          handleChange={handleFilterChange}
          filters={filters}
          setFilters={setFilters}
        />

        <SideBarContent coursesData={filteredCourses} />
      </Flex>
    </div>
  );
}

export default SideBar;
