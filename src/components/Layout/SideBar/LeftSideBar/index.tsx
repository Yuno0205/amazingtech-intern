import { Checkbox, Flex, Input } from "antd";
import styles from "./LeftSideBar.module.css";
import { useEffect, useState } from "react";
import ButtonCustom from "../../../ButtonCustom";

function LeftSideBar({ handleChange, setFilters, filters }: any) {
  const handleChangeCheck = (event: any, filterType: string, value: any) => {
    setFilters((prevFilters: any) => {
      let newFilters = {
        ...prevFilters,
        [filterType]: event.target.checked
          ? [...prevFilters[filterType], value]
          : prevFilters[filterType].filter((v: any) => v !== value),
      };
      handleChange(newFilters); // Sử dụng giá trị mới trong callback
      return newFilters; // Trả về giá trị mới để đảm bảo cập nhật chính xác
    });
  };

  console.log("Danh sách filter", filters);

  return (
    <div className={styles.wrapper}>
      <Flex vertical>
        <Flex vertical style={{ marginBottom: "20px" }}>
          <p className={styles.title}>Khoảng giá</p>
          <span className={styles.text}>Từ giá</span>
          <Input placeholder="VNĐ" />
          <span className={styles.text}>Đến giá</span>
          <Input placeholder="VNĐ" />
        </Flex>
        <Flex vertical style={{ marginBottom: "20px" }}>
          <p className={styles.title}>Hình thức học</p>
          <Checkbox
            value={"Online"}
            onChange={(e) => handleChangeCheck(e, "form", "Online")}
          >
            <span className={styles.text}>Online</span>
          </Checkbox>

          <Checkbox
            value={"Offline"}
            onChange={(e) => handleChangeCheck(e, "form", "Offline")}
          >
            <span className={styles.text}>Offline</span>
          </Checkbox>
        </Flex>
        <Flex vertical style={{ marginBottom: "20px" }}>
          <p className={styles.title}>Trình độ</p>
          <Checkbox
            value={"Easy"}
            onChange={(e) => handleChangeCheck(e, "level", "Easy")}
          >
            <span className={styles.text}>Dễ</span>
          </Checkbox>

          <Checkbox
            value={"Medium"}
            onChange={(e) => handleChangeCheck(e, "level", "Medium")}
          >
            <span className={styles.text}>Trung bình</span>
          </Checkbox>
          <Checkbox
            value={"Hard"}
            onChange={(e) => handleChangeCheck(e, "level", "Hard")}
          >
            <span className={styles.text}>Khó</span>
          </Checkbox>

          <Checkbox
            value={"Very Hard"}
            onChange={(e) => handleChangeCheck(e, "level", "Very Hard")}
          >
            <span className={styles.text}>Cực khó</span>
          </Checkbox>
        </Flex>
        <Flex vertical style={{ marginBottom: "20px" }}>
          <p className={styles.title}>Lĩnh vực</p>
          <Checkbox
            value={"Frontend"}
            onChange={(e) => handleChangeCheck(e, "field", "Frontend")}
          >
            <span className={styles.text}>Frontend</span>
          </Checkbox>

          <Checkbox
            value={"Backend"}
            onChange={(e) => handleChangeCheck(e, "field", "Backend")}
          >
            <span className={styles.text}>Backend</span>
          </Checkbox>
          <Checkbox
            value={"Database"}
            onChange={(e) => handleChangeCheck(e, "field", "Database")}
          >
            <span className={styles.text}>Database</span>
          </Checkbox>

          <Checkbox
            value={"Express"}
            onChange={(e) => handleChangeCheck(e, "field", "Express")}
          >
            <span className={styles.text}>Cấp tốc</span>
          </Checkbox>

          <Checkbox
            value={"Other"}
            onChange={(e) => handleChangeCheck(e, "field", "Other")}
          >
            <span className={styles.text}>Other</span>
          </Checkbox>
          <Checkbox
            value={"STEM"}
            onChange={(e) => handleChangeCheck(e, "field", "STEM")}
          >
            <span className={styles.text}>STEM</span>
          </Checkbox>
        </Flex>
        <div>
          <ButtonCustom>Tìm kiếm</ButtonCustom>
        </div>
      </Flex>
    </div>
  );
}

export default LeftSideBar;
