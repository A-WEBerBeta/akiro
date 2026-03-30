import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`
        fixed bottom-6 right-6 z-50 
        flex items-center justify-center
        h-12 w-12 rounded-full
        backdrop-blur-md
        bg-white/60
        border border-black/10
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        transition-all duration-500 ease-out
        hover:scale-110 hover:bg-white/80 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <ArrowUp size={18} className="text-black/80" />
    </button>
  );
}
