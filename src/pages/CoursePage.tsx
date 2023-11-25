import { Layout } from "antd";
import AppHeader from "../components/Layout/Header/Header";

import SideBar from "../components/Layout/SideBar";
import Footer from "../components/Layout/Footer/Footer";

const { Content } = Layout;

function CoursePage() {
  return (
    <div>
      <AppHeader />

      <Content style={{ marginTop: "120px" }}>
        <SideBar />
      </Content>

      <Footer />
    </div>
  );
}

export default CoursePage;
