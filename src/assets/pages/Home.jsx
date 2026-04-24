import { useState } from "react";
import BackToTop from "../../components/BackToTop";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero3 from "../../components/Hero3";
import LegalModal from "../../components/LegalModal";
import Projects from "../../components/Projects";
import SectionDivider from "../../components/SectionDivider";
import Services from "../../components/Services";

export default function Home() {
  const [modalMode, setModalMode] = useState(null);

  return (
    <main className="bg-[#f7f4ee] text-[#161616] min-h-screen">
      <Header />
      <Hero3 />
      <SectionDivider
        title="Une approche centrée sur l'impact et la clarté."
        quote="Savoir-faire & Vision"
      />
      <Services />
      <SectionDivider
        title="L'équilibre entre forme et fonction."
        quote="Philosophie"
      />
      <Projects />
      <SectionDivider
        title="Votre projet mérite une identité singulière."
        quote="Et si on commençait ?"
      />
      <Contact />
      <Footer setModalMode={setModalMode} />
      <LegalModal
        isOpen={modalMode !== null}
        mode={modalMode}
        onClose={() => setModalMode(null)}
      />
      <BackToTop />
    </main>
  );
}
