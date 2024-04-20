import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

//Components
import SoundBar from "./subComponents/SoundBar";
import NotFound from "./components/NotFound/NotFound";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const Main = React.lazy(() => import('./components/Main'));
const AboutPage = React.lazy(() => import('./components/AboutPage'));
const BlogPage = React.lazy(() => import('./components/BlogPage'));
const WorkPage = React.lazy(() => import('./components/WorkPage'));
const MySkillsPage = React.lazy(() => import('./components/MySkillsPage'));

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>

        <Suspense fallback={<FallbackComponent />}>
          <SoundBar />
          <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location} >

              <Route path="/" element={<Main />} />

              <Route path="/about" element={<AboutPage />} />

              <Route path="/blog" element={<BlogPage />} />

              <Route path="/work" element={<WorkPage />} />

              <Route path="/skills" element={<MySkillsPage />} />

              {/* Below is to catch all the other routes and send the user to main componentt*/}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

const FallbackComponent = () => {
  return (
    <div style={{
      position: "absolute",
      top: "0",
      width: "100%",
      marginTop: "5rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <LoadingSpinner />
    </div>
  )
}

export default App;