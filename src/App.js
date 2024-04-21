import React, { Suspense, useState } from 'react';
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
const Experience = React.lazy(() => import('./components/Experience/Experience'));
const AboutPage = React.lazy(() => import('./components/AboutPage'));
const BlogPage = React.lazy(() => import('./components/BlogPage'));
const WorkPage = React.lazy(() => import('./components/WorkPage'));
const MySkillsPage = React.lazy(() => import('./components/MySkillsPage'));

function App() {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>

        <Suspense fallback={<FallbackComponent loaded= {loaded} setLoaded = {setLoaded}/>}>
          <SoundBar />
          <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location} >

              <Route path="/" element={<Main loaded= {loaded} setLoaded = {setLoaded}/>} />

              <Route path="/about" element={<AboutPage />} />

              <Route path="/blog" element={<BlogPage />} />

              <Route path="/work" element={<Experience />} />

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

const FallbackComponent = ({loaded, setLoaded}) => {
  return (
    <div style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    }}>
      <LoadingSpinner loaded= {loaded} setLoaded = {setLoaded}/>
    </div>
  )
}

export default App;