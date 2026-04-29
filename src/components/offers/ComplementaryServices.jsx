import AkiroCTA from "../AkiroCTA";
import MotionReveal from "../MotionReveal";

const complementaryServices = [
  {
    title: "Maintenance",
    text: "Mises à jour, sauvegardes et suivi technique.",
    price: "Dès 49€/mois",
    accent: "#819179",
  },
  {
    title: "Hébergement",
    text: "Configuration, connexion domaine et gestion simplifiée.",
    price: "Dès 120€/an",
    accent: "#DE8F61",
  },
  {
    title: "Page supplémentaire",
    text: "Ajouter une nouvelle page à votre site existant.",
    price: "Dès 190€",
    accent: "#A8B7C8",
  },
  {
    title: "SEO local",
    text: "Optimisations avancées pour votre visibilité locale.",
    price: "Dès 290€",
    accent: "#819179",
  },
  {
    title: "Contenus",
    text: "Structurer vos textes pour clarifier votre message.",
    price: "Dès 190€",
    accent: "#DE8F61",
  },
  {
    title: "Évolutions",
    text: "Fonctionnalités, ajustements ou besoins spécifiques.",
    price: "Sur devis",
    accent: "#A8B7C8",
  },
];

export default function ComplementaryServices() {
  return (
    <section className="bg-white px-6 py-24 md:px-10 lg:px-16 lg:py-28 xl:px-20">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <MotionReveal direction="left">
            <p className="text-[12px] font-black uppercase tracking-[0.38em] text-neutral-800">
              Prestations complémentaires
            </p>
          </MotionReveal>

          <MotionReveal direction="left" delay={0.08}>
            <p className="mt-8 max-w-sm text-base leading-7 text-neutral-500">
              Des modules complémentaires pour aller plus loin et faire évoluer
              votre projet.
            </p>
          </MotionReveal>

          <MotionReveal className="mt-16" direction="left" delay={0.14}>
            <AkiroCTA href="/#contact" label="Demander un devis" autoColor />
          </MotionReveal>
        </div>

        <div className="lg:col-span-9">
          <div className="grid gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {complementaryServices.map((service, index) => (
              <div
                key={service.title}
                className={`relative px-0 md:px-10 ${
                  index % 3 !== 0 ? "lg:border-l lg:border-neutral-950/10" : ""
                } ${
                  index % 2 !== 0
                    ? "md:border-l md:border-neutral-950/10 lg:border-l"
                    : ""
                }`}
              >
                <p className="mb-7 text-[11px] font-bold uppercase tracking-[0.35em] text-neutral-300">
                  0{index + 1}
                </p>

                <h3 className="text-[16px] font-black uppercase tracking-[0.32em] text-neutral-950">
                  {service.title}
                </h3>

                <div
                  className="mt-4 h-px w-10"
                  style={{ backgroundColor: service.accent }}
                />

                <p className="mt-5 max-w-[28ch] text-base leading-7 text-neutral-500">
                  {service.text}
                </p>

                <p className="mt-7 text-[14px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
