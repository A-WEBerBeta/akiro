import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import ProjectPage from "./pages/ProjectPage";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/:id" element={<ProjectPage />} />
        <Route path="/offres" element={<Offers />} />
      </Routes>
    </>
  );
}

export default App;
