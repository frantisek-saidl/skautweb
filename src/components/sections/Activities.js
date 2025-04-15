export default function Activities() {
  return (
    <section className="py-16 bg-forest-900 text-white" id="activities">
      <div className="container text-center">
        <h2 className="text-2xl font-bold mb-8">Naše skautské aktivity</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <ActivityCard
            title="Tábory"
            description="Letní tábory plné dobrodružství v přírodě."
          />
          <ActivityCard
            title="Schůzky"
            description="Pravidelná setkání s kamarády, hry a výpravy."
          />
          <ActivityCard
            title="Výpravy"
            description="Objevování nových míst, týmová spolupráce."
          />
        </div>
      </div>
    </section>
  );
}

function ActivityCard({ title, description }) {
  return (
    <div className="bg-white/10 p-6 rounded-md border border-white/20">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
