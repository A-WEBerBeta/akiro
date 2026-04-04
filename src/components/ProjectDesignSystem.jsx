function getContrastColor(hex) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.65 ? "#161616" : "#F8F6F2";
}

function getPillBg(hex) {
  return getContrastColor(hex) === "#161616"
    ? "rgba(22,22,22,0.08)"
    : "rgba(248,246,242,0.14)";
}

export default function ProjectDesignSystem({ project }) {
  return (
    <div className="space-y-6">
      {/* bloc typo */}
      <div className="overflow-hidden rounded-4xl">
        <div className="bg-[#F1E0D0] px-8 py-7 text-[#30363E]">
          <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div className="text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.05em]">
              {project.designMark}
            </div>

            <div className="flex items-center justify-center text-[clamp(2rem,4vw,3.2rem)] leading-none">
              {project.markLeft || "◐"}
            </div>

            <div className="flex items-center justify-center text-[clamp(2rem,4vw,3.2rem)] leading-none">
              {project.markRight || "◑"}
            </div>
          </div>
        </div>

        <div className="bg-[#30363E] px-8 py-8 text-white">
          <h3 className="text-[clamp(3rem,5vw,4.8rem)] leading-none tracking-[-0.04em]">
            {project.typography.primary}
          </h3>

          <p className="mt-5 text-[clamp(1.5rem,2.3vw,2.3rem)] leading-tight text-white/90">
            abcdefghijklmnopqrstuvwxyz
            <br />
            0123456789
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.typography.weights.map((weight) => (
              <span
                key={weight}
                className="rounded-full bg-white/12 px-4 py-2 text-sm text-white/90"
              >
                {weight}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* palette */}
      <div className="grid gap-6 md:grid-cols-2">
        {project.palette.slice(0, 4).map((color) => {
          const textColor = getContrastColor(color.hex);

          return (
            <div
              key={color.hex}
              className="rounded-4xl p-8"
              style={{ backgroundColor: color.hex, color: textColor }}
            >
              <div
                className="h-12 w-24 rounded-2xl border"
                style={{ borderColor: `${textColor}33` }}
              />

              <div className="mt-6 flex items-center gap-4">
                <p className="text-xl font-medium">{color.name}</p>

                <span
                  className="rounded-full px-3 py-1 text-2xl"
                  style={{
                    backgroundColor: getPillBg(color.hex),
                    color: textColor,
                  }}
                >
                  {color.hex}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
