"use client";

import ServiceCard from "./ServiceCard";

import Piantonamento from "../../public/media/cds-piantonamento.jpg";
import Trasporto from "../../public/media/cds-valori.jpg";
import Nave from "../../public/media/cds-portuale.jpg";

export default function ServicesSection() {
  return (
    <section className="bg-[#e7ece8] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-10">

        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#91712f]">
          Servizi CDS
        </p>

        <h2 className="mt-4 text-3xl font-bold text-[#142331] md:text-4xl">
          I nostri servizi
        </h2>

        <p className="mx-auto mb-12 mt-5 max-w-2xl text-lg text-slate-700 md:mb-14">
          Soluzioni professionali per la sicurezza di aziende, infrastrutture critiche
          e contesti ad alta sensibilità.
        </p>

        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">

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

