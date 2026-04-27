import { useRef, useState } from "react";
import ComplementaryServices from "../components/offers/ComplementaryServices";
import OffersHero from "../components/offers/OffersHero";
import OffersPlans from "../components/offers/OffersPlans";
import OffersProcess from "../components/offers/OffersProcess";
import OffersTabs from "../components/offers/OffersTabs";
import SectionDivider from "../components/SectionDivider";
import { offers } from "../data/offers";

export default function Offers() {
  const [activeTab, setActiveTab] = useState("vitrine");
  const packsRef = useRef(null);

  const current = offers[activeTab];

  const handleTabClick = (key) => {
    setActiveTab(key);

    setTimeout(() => {
      packsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

  return (
    <main className="min-h-screen bg-(--background) text-neutral-950">
      <OffersHero />

      <OffersTabs activeTab={activeTab} onTabClick={handleTabClick} />

      <OffersPlans ref={packsRef} activeTab={activeTab} current={current} />

      <SectionDivider
        title="Des besoins plus ciblés existent aussi."
        quote="Des solutions simples, selon votre réalité"
      />

      <ComplementaryServices />

      <OffersProcess />
    </main>
  );
}
