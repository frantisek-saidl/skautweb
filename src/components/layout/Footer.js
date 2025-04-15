export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white py-10 mt-24">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <h2 className="text-lg font-bold">SILMARIL</h2>
            <p className="mt-2 text-sm max-w-xs">
              Skautská skupina Silmaril se zaměřuje na rozvoj mladých lidí
              prostřednictvím zážitkové pedagogiky, pobytu v přírodě a
              skautských hodnot.
            </p>
          </div>
          <div className="space-y-2 text-sm mt-4 sm:mt-0">
            <p>Skautská 123, 123 45 Skautov</p>
            <p>info@silmaril.cz</p>
            <p>+420 123 456 789</p>
            <p>Schůzky: úterý a čtvrtek 16:00 - 18:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
