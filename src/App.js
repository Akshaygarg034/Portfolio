import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

          <Routes key={location.pathname} location={location} >

            <Route path="/" element={<Main />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/blog" element={<BlogPage />} />

            <Route path="/work" element={<WorkPage />} />

            <Route path="/skills" element={<MySkillsPage />} />

            <Route path="*" element={<Main />} />
          </Routes>
    </>
  );
}

export default App;