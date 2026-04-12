"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AziendaPage() {
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const sectionsRef = useRef<HTMLElement[]>([]);

  // Intersection Observer con reset (funziona su e giù)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.id!;

          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [id]: true }));
          } else {
            setVisible((prev) => ({ ...prev, [id]: false }));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <section className="relative w-full min-h-screen bg-[url('/media/cds-vigilanza.jpg')] bg-cover bg-center bg-no-repeat py-24 px-6">
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* TITOLO */}
          <h1
            ref={addRef}
            data-id="titolo"
            className={`text-4xl md:text-5xl font-bold text-white text-center mb-12 transition-all duration-700 ${
              visible["titolo"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Istituto di Vigilanza CDS
          </h1>

          {/* BLOCCO PRINCIPALE */}
          <div
            ref={addRef}
            data-id="blocco1"
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20 transition-all duration-700 ${
              visible["blocco1"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* IMMAGINE */}
            <div className="relative w-full h-[350px] md:h-[420px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/media/cds-centrale-operativa.jpg"
                alt="Centrale Operativa CDS"
                fill
                className="object-cover"
              />
            </div>

            {/* TESTO */}
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-gray-200 leading-relaxed shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Costantini Divisione Sicurezza
              </h2>

              <p className="mb-4">
                L’Istituto di Vigilanza CDS Srl è oggi una delle realtà leader nel territorio veneziano, con oltre 150 Guardie Particolari Giurate.
              </p>

              <p className="mb-4">
                Nato nel 1998 come piccola agenzia di portierato, CDS ha saputo evolversi fino a diventare un punto di riferimento per la sicurezza privata.
              </p>

              <p>
                Oggi CDS è sinonimo di affidabilità, competenza e innovazione.
              </p>
            </div>
          </div>

          {/* IMMAGINI SECONDARIE */}
          <div
            ref={addRef}
            data-id="immagini"
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 transition-all duration-700 ${
              visible["immagini"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {[
              "/media/cds-mobile.jpg",
              "/media/cds-valori-2.jpg",
              "/media/cds-portuale-2.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="relative h-56 rounded-xl overflow-hidden shadow-xl group transition-all"
              >
                <Image
                  src={img}
                  alt="CDS"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <h2
            ref={addRef}
            data-id="timeline-title"
            className={`text-3xl font-bold text-white text-center mb-10 transition-all duration-700 ${
              visible["timeline-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            La nostra storia
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              ["1998", "CDS nasce come piccola agenzia di portierato a Marcon (VE)."],
              ["2000", "Ampliamento dei servizi di vigilanza privata e portierato."],
              ["2004", "Apertura della nuova sede operativa a Marcon (VE)."],
              ["2008", "CDS diventa Costantini Divisione Sicurezza Srl."],
              ["2010", "Implementazione del sistema di videosorveglianza e teleallarme."],
              ["2013", "Avvio del servizio di vigilanza su imbarcazioni e cantieri navali."],
              ["2015", "Potenziamento dell’organico e ampliamento della flotta veicoli."],
              ["2018", "Superamento degli 8 milioni di euro di fatturato."],
              ["2021", "Introduzione di nuove tecnologie e formazione avanzata."],
              ["2023", "CDS consolida la sua posizione di leader nel settore."],
            ].map(([year, text], i) => {
              const id = `timeline-${i}`;
              const fromLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  ref={addRef}
                  data-id={id}
                  className={`p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg transition-all duration-700 ${
                    visible[id]
                      ? "opacity-100 translate-x-0"
                      : fromLeft
                      ? "opacity-0 -translate-x-10"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{year}</h3>
                  <p className="text-gray-200">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* BACK TO TOP */}
      <BackToTop />
    </>
  );
}
