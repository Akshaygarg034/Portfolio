import React, { Suspense, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

//Components
import NotFound from "./components/NotFound/NotFound";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const Main = React.lazy(() => import('./components/Main'));
const Experience = React.lazy(() => import('./components/Experience/Experience'));
const ContactPage = React.lazy(() => import('./components/ContactPage'));
const SkillsPage = React.lazy(() => import('./components/SkillsPage/SkillsPage'));
const ProjectsPage = React.lazy(() => import('./components/ProjectsPage'));

function App() {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>

        <Suspense fallback={<FallbackComponent loaded= {loaded} setLoaded = {setLoaded}/>}>
          <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location} >

              <Route path="/" element={<Main loaded= {loaded} setLoaded = {setLoaded}/>} />

              <Route path="/contact" element={<ContactPage />} />

              <Route path="/projects" element={<ProjectsPage />} />

              <Route path="/experience" element={<Experience />} />

              <Route path="/skills" element={<SkillsPage />} />

              {/* Below is to catch all the other routes and send the user to main componentt*/}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

const FallbackComponent = ({loaded}) => {
  return (
    <div style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    }}>
      <LoadingSpinner loaded= {loaded}/>
    </div>
  )
}

export default App;