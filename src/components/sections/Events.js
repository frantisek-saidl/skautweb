export default function Events() {
  return (
    <section className="py-16 bg-white" id="events">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Nadcházející akce
        </h2>
        <Event
          title="Jarní výprava"
          date="15.–17. května"
          available="2 z 20 míst"
        />
        <Event
          title="Letní tábor"
          date="1.–15. července"
          available="2 z 40 míst"
        />
      </div>
    </section>
  );
}

function Event({ title, date, available }) {
  return (
    <div className="border p-4 mb-4 rounded-md shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
        <div className="h-full bg-amber-500 w-1/4"></div>
      </div>
      <p className="text-sm text-gray-600">{available}</p>
    </div>
  );
}
