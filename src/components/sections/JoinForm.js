export default function JoinForm() {
  return (
    <section className="py-16 bg-forest-900 text-white" id="join">
      <div className="container max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Připoj se k nám</h2>
        <p className="mb-6">
          Vyplň formulář a my se ti ozveme s dalším postupem.
        </p>
        <form className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Jméno"
            className="w-full p-3 rounded-md text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md text-black"
          />
          <textarea
            placeholder="Zpráva (nepovinně)"
            rows="4"
            className="w-full p-3 rounded-md text-black"></textarea>
          <button
            type="submit"
            className="bg-amber-500 px-6 py-2 rounded-md hover:bg-amber-600 transition">
            Odeslat
          </button>
        </form>
      </div>
    </section>
  );
}
