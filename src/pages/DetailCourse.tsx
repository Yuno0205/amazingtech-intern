import { Flex, Layout } from "antd";
import AppHeader from "../components/Layout/Header/Header";

import CourseInfo from "../components/CourseInfo";
import Footer from "../components/Layout/Footer/Footer";

const { Content } = Layout;

function DetailPage() {
  return (
    <div>
      <AppHeader />

      <Content style={{ marginTop: "120px" }}>
        <CourseInfo />
      </Content>

      <Footer />
    </div>
  );
}

export default DetailPage;
