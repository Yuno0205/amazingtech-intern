import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MenuBar from "./components/MenuBar";

import CoursePage from "./pages/CoursePage";
import DetailPage from "./pages/DetailCourse";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/courses/:id" element={<DetailPage />} />
          <Route path="/*" element={<MenuBar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
