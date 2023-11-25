import { FloatButton, Layout } from "antd";
import Banner from "../components/Banner";
import AppHeader from "../components/Layout/Header/Header";
import About from "../components/About";
import Advantage from "../components/Advantage";
import Footer from "../components/Layout/Footer/Footer";
import LearningPath from "../components/LearningPath";
import Courses from "../components/Courses";
import TypicalMentor from "../components/TypicalMentor";
import Ads from "../components/Ads";
import School from "../components/School";
import { CommentOutlined } from "@ant-design/icons";

const { Content } = Layout;

function HomePage() {
  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <AppHeader />

      <Content style={{ marginTop: "120px" }}>
        <Banner />
        <About />
        <Advantage />
        <LearningPath />
        <Courses titleCourse="Khóa học tiêu biểu" />
        <Courses titleCourse="Khoá học cấp tốc" />
        <TypicalMentor />
        <Ads />
        <School />
        <FloatButton
          style={{ width: 60, height: 60 }}
          type="primary"
          tooltip={"Inbox for more"}
          icon={<CommentOutlined />}
        />
      </Content>

      <Footer />
    </div>
  );
}

export default HomePage;
