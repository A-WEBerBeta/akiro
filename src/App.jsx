import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import ProjectPage from "./assets/pages/ProjectPage";
import ServicesPage from "./assets/pages/ServicesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projet/:id" element={<ProjectPage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}

export default App;
