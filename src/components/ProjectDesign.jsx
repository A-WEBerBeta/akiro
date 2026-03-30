export default function ProjectDesign() {
  return (
    <section className="mt-32 space-y-10">
      {/* TOP ROW */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* IMAGE */}
        <div className="overflow-hidden rounded-[2rem] bg-[#EBF6FC]">
          <img
            src="/assets/projects/plomberie-hero.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* TYPO BLOCK */}
        <div className="flex flex-col justify-between rounded-[2rem] bg-[#30363E] p-10 text-white">
          <div>
            <h3 className="text-5xl tracking-tight">Instrument Sans</h3>

            <p className="mt-6 text-xl opacity-80 leading-relaxed">
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </p>
          </div>

          <div className="mt-10 flex gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              Regular
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              Medium
            </span>
          </div>
        </div>
      </div>

      {/* COLORS GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { name: "Lite Sand", hex: "#FDF7F4", bg: "#FDF7F4" },
          { name: "Sand", hex: "#FDEADB", bg: "#FDEADB" },
          { name: "Lite Blue", hex: "#EBF6FC", bg: "#EBF6FC" },
          { name: "Blue", hex: "#A8B7C8", bg: "#A8B7C8" },
        ].map((c) => (
          <div
            key={c.name}
            className="rounded-[2rem] p-6 transition-transform duration-500 hover:-translate-y-1"
            style={{ backgroundColor: c.bg }}
          >
            <div className="h-14 w-24 rounded-xl border border-black/10" />

            <p className="mt-4 text-sm font-medium tracking-tight">{c.name}</p>

            <p className="text-xs opacity-60">{c.hex}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
