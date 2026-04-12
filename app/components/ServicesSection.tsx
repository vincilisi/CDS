import ServiceCard from "./ServiceCard";

import Piantonamento from "../../public/media/cds-piantonamento.jpg";
import Trasporto from "../../public/media/cds-valori.jpg";
import Nave from "../../public/media/cds-portuale.jpg"

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          I nostri servizi
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-16 text-lg">
          Soluzioni professionali per la sicurezza di aziende, infrastrutture critiche
          e contesti ad alta sensibilità.
        </p>

        <div className="grid md:grid-cols-3 gap-12 items-stretch place-items-center">
          <ServiceCard
            image={Piantonamento}
            alt="Piantonamento e vigilanza"
            tag="Presidio costante"
            title="Piantonamento e vigilanza"
            text="Vigilanza fissa e piantonamento antirapina con personale armato altamente qualificato."
          />

          <ServiceCard
            image={Trasporto}
            alt="Trasporto valori"
            tag="Personale addestrato"
            title="Trasporto valori"
            text="Mezzi blindati e personale addestrato per la massima sicurezza nel trasporto valori."
          />

          <ServiceCard
            image={Nave}
            alt="Vigilanza portuale"
            tag="A Venezia"
            title="Vigilanza portuale"
            text="Sicurezza marittima e portuale autorizzata da Prefettura, Capitaneria e Autorità Portuale."
          />

        </div>
      </div>
    </section>
  );
}
