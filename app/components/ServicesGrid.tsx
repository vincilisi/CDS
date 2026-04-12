"use client";

import { useState } from "react";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  image: string;
  text: string;
}

export default function ServicesGrid() {
  const [active, setActive] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Centrale Operativa",
      image: "/media/cds-centrale-operativa.jpg",
      text:
        "Cuore delle attività dell’Istituto è la moderna ed efficiente Centrale Operativa, costantemente presidiata da personale qualificato e dotata di sistemi tecnologici di ultima generazione per la gestione e il monitoraggio degli impianti di allarme, videosorveglianza e localizzazione satellitare. La Centrale Operativa riceve e gestisce le segnalazioni di allarme provenienti dagli impianti collegati, attivando immediatamente le pattuglie di zona o le Forze dell’Ordine. Coordina inoltre i servizi di vigilanza fissa e mobile, garantendo un controllo costante e una risposta tempestiva."
    },
    {
      id: 2,
      title: "Piantonamento e Vigilanza Fissa",
      image: "/media/cds-piantonamento.jpg",
      text:
        "I servizi di Vigilanza Fissa prevedono la presenza continuativa di personale qualificato presso un sito specifico per garantire la sicurezza di beni e persone. Gli agenti svolgono attività di controllo accessi, sorveglianza perimetrale, verifica impianti e gestione emergenze. È un deterrente efficace contro furti e intrusioni."
    },
    {
      id: 3,
      title: "Vigilanza Ispettiva e Mobile",
      image: "/media/cds-mobile.jpg",
      text:
        "Il servizio di vigilanza ispettiva e mobile garantisce la sicurezza mediante controlli periodici effettuati da pattuglie su percorsi prestabiliti o su segnalazione della Centrale Operativa. Le pattuglie sono dotate di sistemi di comunicazione e localizzazione satellitare per interventi rapidi."
    },
    {
      id: 4,
      title: "Trasporto Valori",
      image: "/media/cds-valori.jpg",
      text:
        "Il servizio di Trasporto Valori viene effettuato con mezzi blindati e personale altamente qualificato. Prevede la gestione completa delle operazioni di prelievo, trasporto e consegna, con sistemi di sicurezza avanzati e monitoraggio costante."
    },
    {
      id: 5,
      title: "Teleallarme",
      image: "/media/cds-teleallarme.jpg",
      text:
        "Il servizio di teleallarme consente di ricevere e gestire segnali di allarme provenienti da impianti di sicurezza, antincendio e controllo accessi. Garantisce interventi tempestivi e monitoraggio in tempo reale."
    },
    {
      id: 6,
      title: "Controllo Satellitare",
      image: "/media/cds-satellitare.jpg",
      text:
        "Il servizio di controllo satellitare permette di localizzare e monitorare flotte di veicoli in tempo reale. Utile per ottimizzare percorsi, ridurre costi e migliorare la sicurezza dei mezzi."
    },
    {
      id: 7,
      title: "Soccorso alla Persona",
      image: "/media/cds-antipanico.png",
      text:
        "Il servizio di soccorso alla persona garantisce assistenza immediata in caso di emergenza tramite dispositivi Body Guard GPS collegati alla Centrale Operativa."
    },
    {
      id: 8,
      title: "Mezzi e Imbarcazioni",
      image: "/media/cds-portuale.jpg",
      text:
        "Il servizio di localizzazione e monitoraggio dei mezzi aziendali e delle imbarcazioni consente un controllo costante tramite GPS integrato."
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[url('/media/cds-vigilanza.jpg')] bg-cover bg-center bg-no-repeat py-24 px-6">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10">

        {/* GRID NORMALE */}
        {!active && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.id}
                onClick={() => setActive(s)}
                className="cursor-pointer group rounded-xl overflow-hidden shadow-lg bg-white transition hover:scale-[1.03]"
              >
                <div className="h-48 w-full relative">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-4 text-center font-semibold text-gray-800">
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CARD ATTIVA */}
        {active && (
          <div className="max-w-4xl mx-auto text-center">

            <button
              onClick={() => setActive(null)}
              className="mb-6 px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition"
            >
              Torna ai servizi
            </button>

            <div className="w-full max-w-3xl mx-auto">

              <div className="relative w-full h-[350px] overflow-hidden mb-6">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-left">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  {active.title}
                </h2>
                <p className="text-gray-200 leading-relaxed">{active.text}</p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
