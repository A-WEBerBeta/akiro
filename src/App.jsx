import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <main className="bg-[#f7f4ee] text-[#161616] min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Projects />
    </main>
  );
}

export default App;
