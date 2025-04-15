export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/your-image.jpg')" }}>
      <div className="bg-black/50 absolute inset-0 z-0"></div>
      <div className="relative z-10 text-white max-w-2xl">
        <p className="text-lg mb-2">Skautská skupina Silmaril</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Dobrodružství <span className="text-amber-500">začíná</span>
        </h1>
        <p className="mt-4 mb-6">
          Připoj se k naší skautské rodině, kde společně objevujeme přírodu,
          budujeme přátelství a rozvíjíme dovednosti pro celý život.
        </p>
        <a
          href="#form"
          className="inline-block bg-amber-500 text-white font-semibold py-2 px-5 rounded hover:bg-amber-600 transition">
          Připoj se k nám
        </a>
      </div>
    </section>
  );
}
