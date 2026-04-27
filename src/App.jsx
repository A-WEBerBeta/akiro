import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projet/:id" element={<ProjectPage />} />
      <Route path="/offres" element={<Offers />} />
    </Routes>
  );
}

export default App;
