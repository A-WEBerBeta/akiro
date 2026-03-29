export default function Header() {
  return (
    <header className="w-full px-6 py-6 md:px-10 lg:px-16 xl:px-20">
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="text-sm tracking-[0.32em] text-neutral-800 uppercase"
        >
          AKIRO
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm text-neutral-600 transition hover:text-neutral-900"
          >
            Services
          </a>
          <a
            href="#services"
            className="text-sm text-neutral-600 transition hover:text-neutral-900"
          >
            Réalisations
          </a>
          <a
            href="#services"
            className="text-sm text-neutral-600 transition hover:text-neutral-900"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
