export default function Header() {
  return (
    <header className="bg-gradient-to-b from-black/60 via-black/40 to-transparent absolute top-0 left-0 w-full z-10 text-white">
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-lg font-bold">SILMARIL</h1>
        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:underline">
            O nás
          </a>
          <a href="#activities" className="hover:underline">
            Aktivity
          </a>
          <a href="#agegroups" className="hover:underline">
            Oddíly
          </a>
          <a href="#gallery" className="hover:underline">
            Galerie
          </a>
          <a href="#contact" className="hover:underline">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
