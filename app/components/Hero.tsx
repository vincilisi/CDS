import HeroSlider from "./HeroSlider";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative w-full
        h-[60vh]
        sm:h-[70vh]
        md:h-[80vh]
        lg:h-screen
        flex items-center justify-center text-white
      "
    >
      <HeroSlider />

      <div className="relative max-w-4xl text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Sicurezza certificata per aziende e infrastrutture critiche
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
          Operativi a Venezia e in tutto il Veneto dal 2012, proteggiamo persone, beni e
          strutture con vigilanza armata, tecnologia avanzata e personale qualificato.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/servizi"
            className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            I nostri servizi
          </Link>

          <Link
            href="/contatti"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition"
          >
            Richiedi preventivo
          </Link>
        </div>
      </div>
    </section>
  );
}
