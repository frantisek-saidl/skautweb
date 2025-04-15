export default function AgeGroups() {
  const groups = [
    { label: "Světlušky", age: "6–10 let", color: "bg-amber-100" },
    { label: "Vlčata", age: "6–10 let", color: "bg-amber-100" },
    { label: "Skautky", age: "11–15 let", color: "bg-emerald-100" },
    { label: "Skauti", age: "11–15 let", color: "bg-white" },
  ];

  return (
    <section className="py-16 bg-gray-50" id="agegroups">
      <div className="container text-center">
        <h2 className="text-2xl font-bold mb-8">Oddíly podle věku</h2>
        <div className="grid sm:grid-cols-4 gap-6">
          {groups.map(({ label, age, color }) => (
            <div key={label} className={`rounded-lg p-4 shadow ${color}`}>
              <h3 className="font-medium text-lg">{label}</h3>
              <p className="text-sm">{age}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
