"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";

const milestones = [
  ["1999", "Rilascio della licenza di polizia, inizialmente limitata ad alcuni settori e comuni della provincia."],
  ["2000", "Estensione dell'autorizzazione a tutti i settori e comuni della provincia; l'Istituto, allora in forma cooperativa, conta importanti clienti istituzionali, 18 automezzi, due imbarcazioni e circa 70 dipendenti."],
  ["2001", "Ampliamento dell'organico in licenza da 25 a 50 guardie e autorizzazione della Prefettura di Treviso a operare anche nella provincia."],
  ["2002", "Acquisto dell'attuale sede: 600 mq coperti e 3.000 mq scoperti."],
  ["2004", "Primi servizi portuali secondo la normativa internazionale ISPS Code e abilitazione Port Facility Security Officer."],
  ["2005", "Autorizzazione ENAC ai sensi dell'art. 3 del DM 85/99 per operare in ambito aeroportuale, con i servizi di sicurezza per i voli Iberia e British Airways."],
  ["2006", "Certificazione ISO 9001:2000 e autorizzazione dell'Autorita Portuale di Venezia per operare nella sicurezza marittima e portuale."],
  ["2006", "Attivazione del settore trasporto e scorta valori."],
  ["2007", "Avvio dei servizi aeroportuali ai varchi."],
  ["2011", "Riconoscimento del Ministero dell'Interno tra i sei istituti della provincia di Venezia qualificati per il progetto 'Mille Occhi sulle Citta', in collaborazione con le Forze dell'Ordine."],
  ["2012", "Passaggio dalla gestione in forma cooperativa a una societa di capitali."],
  ["2015", "Con l'entrata in vigore del DM 269/2010, CDS S.r.l. viene riclassificata al livello dimensionale 3 e territoriale 4."],
  ["2016", "Apertura di una filiale a Vicenza per servire il mercato orafo vicentino."],
  ["2017", "Conseguimento delle certificazioni UNI 50518 e UNI 10891 e riclassificazione, secondo il DM 269/2010, per le lettere A, B, D ed E ai livelli dimensionali e territoriali 4 e 5."],
] as const;

export default function CompanyHistory() {
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const observe = (element: HTMLElement | null) => {
    if (element && !sectionRefs.current.includes(element)) {
      sectionRefs.current.push(element);
    }
  };

  return (
    <main className="bg-[#f4f5f2] text-[#142331]">
      <Navbar />
      <section className="relative isolate overflow-hidden bg-[#10293a] pt-16 text-white">
        <Image src="/media/cds-centrale-operativa.jpg" alt="Centrale operativa dell'Istituto di Vigilanza CDS" fill priority sizes="100vw" className="-z-20 object-cover object-center opacity-45" />
        <div className="absolute inset-0 -z-10 bg-[#10293a]/75" />
        <div className="mx-auto grid min-h-[520px] max-w-7xl content-end px-6 pb-20 pt-28 md:px-10 md:pb-24">
          <div ref={observe} className="history-reveal max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#d8b46c]">Istituto di Vigilanza CDS</p>
            <h1 className="max-w-2xl text-5xl font-bold leading-tight md:text-6xl">Costantini Divisione Sicurezza</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">Una storia costruita con competenza, investimenti e presenza costante sul territorio.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9ded9] bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-10">
          <div ref={observe} className="history-reveal"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#91712f]">Dal 1995</p><h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">La nascita di CDS</h2></div>
          <div ref={observe} className="history-reveal space-y-6 text-lg leading-8 text-slate-700">
            <p>CDS, acronimo di Costantini Divisione Sicurezza, nasce nel 1995 come impresa di servizi per le imprese per volontà di Helio Costantini. Negli anni si afferma progressivamente, specializzandosi nella vigilanza armata e nel trasporto valori.</p>
            <p>Nell&apos;aprile 1999, al termine di un iter autorizzativo avviato nel 1996, la Prefettura di Venezia riconosce CDS come Istituto di Vigilanza. Oggi la società è un riferimento nel Veneto, con oltre 150 Guardie Particolari Giurate, 60 automezzi e un percorso di crescita costante.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#e7ece8] py-16 md:py-24"><div className="mx-auto max-w-7xl px-6 md:px-10"><div ref={observe} className="history-reveal max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#91712f]">Servizi e competenze</p><h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">Sicurezza integrata, in evoluzione continua</h2><p className="mt-6 text-lg leading-8 text-slate-700">Dalla fondazione CDS ha ampliato fatturato, servizi e qualità operativa: piantonamento antirapina, controllo accessi, vigilanza ispettiva diurna e notturna, videosorveglianza, teleallarme, radiolocalizzazione satellitare, trasporto, scorta e custodia valori, vigilanza aeroportuale, portuale e ferroviaria.</p></div></div></section>

      <section className="bg-[#10293a] py-16 text-white md:py-24"><div className="mx-auto max-w-5xl px-6 md:px-10"><div ref={observe} className="history-reveal mb-14 max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d8b46c]">1999 - 2017</p><h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">Le tappe della crescita</h2></div><ol className="relative space-y-4 border-l border-[#d8b46c]/60 pl-7 md:pl-10">{milestones.map(([year, description], index) => <li key={`${year}-${index}`} ref={observe} className="history-reveal relative grid gap-3 border-b border-white/15 py-5 last:border-b-0 md:grid-cols-[88px_1fr] md:gap-7"><span className="absolute -left-[35px] top-8 h-3 w-3 rounded-full border-2 border-[#10293a] bg-[#d8b46c] md:-left-[47px]" /><time className="text-xl font-bold text-[#e5c988]">{year}</time><p className="leading-7 text-slate-200">{description}</p></li>)}</ol></div></section>

      <Footer />
      <BackToTop />
    </main>
  );
}