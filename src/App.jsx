import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomCursor } from "./components/CustomCursor/CustomCursor";
import { Hero } from "./components/Hero/Hero";
import StarsCanvas from "./components/canvas/StarFall";
import { ProjectsScroll } from "./components/ProjectsScroll/ProjectsScroll";
import Layout from "./components/Layout";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { ProjectsLayout } from "./components/ProjectsLayout/ProjectsLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <StarsCanvas />
              </>
            }
          />
          <Route path="projects" element={<ProjectsScroll />} />
          <Route path="projects/:projectId" element={<ProjectsLayout />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
