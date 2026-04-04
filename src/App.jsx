import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import ProjectPage from "./assets/pages/ProjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projet/:id" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
