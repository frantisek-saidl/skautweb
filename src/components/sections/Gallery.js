export default function Gallery() {
  return (
    <section className="py-16 bg-gray-100" id="gallery">
      <div className="container text-center">
        <h2 className="text-2xl font-bold mb-8">Galerie zážitků</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-40 bg-gray-300 rounded-md flex items-center justify-center text-gray-600">
              Foto {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
