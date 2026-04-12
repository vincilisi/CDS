"use client";

import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setAnimate(true);
    setTimeout(() => {
      setSent(true);
    }, 300);
  };

  return (
    <section className="relative w-full min-h-screen bg-[url('/media/cds-vigilanza.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative max-w-5xl mx-auto px-6 py-24">
        {/* TITOLO */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">Contatti</h1>
          <p className="text-gray-200 text-lg">
            Compila il modulo e sarai ricontattato al più presto
          </p>
        </div>

        {/* BLOCCO INFO AZIENDALI + SEDI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm leading-relaxed">
            <h2 className="text-lg font-semibold mb-3">CDS S.r.l.</h2>
            <p>Partita Iva e Codice Fiscale 04884860275</p>
            <p>Codice Univoco SUBM70N</p>
            <p>Registro Imprese C.C.I.A.A. VE 04884860275</p>
            <p className="mb-4">R.E.A. 364777</p>

            <p className="font-semibold mt-2">
              Sede Legale, Direzione e Centrale Operativa Venezia
            </p>
            <p>Via Pietro Paleocapa, 4</p>
            <p>30175 Venezia (VE)</p>
            <p>Telefono: +39 041 978177</p>
            <p className="mb-3">Fax: +39 041 935203</p>

            <p className="font-semibold mt-2">Punto operativo Vicenza</p>
            <p>Via dell’Industria, 73</p>
            <p className="mb-3">36100 Vicenza</p>

            <p className="font-semibold mt-2">Punto operativo Friuli Venezia Giulia</p>
            <p>P.zza Don G. Savio, 6</p>
            <p className="mb-3">33054 Lignano UD</p>

            <p className="font-semibold mt-2">Punto operativo Lido di Jesolo</p>
            <p>Via G. Leopardi, 15</p>
            <p>30016 Jesolo VE</p>
          </div>

          {/* BLOCCO EMAIL */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm leading-relaxed">
            <h2 className="text-lg font-semibold mb-3">
              Siamo sempre contattabili via email
            </h2>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Direzione Generale: </span>
                <span>direzione@cbvigilarus.it</span>
              </li>
              <li>
                <span className="font-semibold">Amministrazione: </span>
                <span>amministrazione@cbvigilarus.it</span>
              </li>
              <li>
                <span className="font-semibold">Ufficio Personale: </span>
                <span>ufficio.personale@costantinidivisionesicurezza.it</span>
              </li>
              <li>
                <span className="font-semibold">Centrale Operativa: </span>
                <span>centrale@costantinidivisionesicurezza.it</span>
              </li>
              <li>
                <span className="font-semibold">Ufficio Valori: </span>
                <span>valori@costantinidivisionesicurezza.it</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FORM */}
        <div className="text-center">
          {sent ? (
            <div className="w-full p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-white text-xl animate-fadeIn">
              <p className="font-semibold mb-2">Messaggio inviato con successo</p>
              <p className="text-gray-200">Ti risponderemo quanto prima.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={
                "w-full p-8 md:p-10 rounded-2xl bg-white/12 backdrop-blur-md border border-white/25 shadow-2xl space-y-6 transition-all duration-300 " +
                (animate ? "translate-x-[200%] opacity-0" : "translate-x-0 opacity-100")
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-left text-white font-medium mb-1">
                    Nome *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 border border-white/25 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-left text-white font-medium mb-1">
                    Cognome *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 border border-white/25 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-left text-white font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 border border-white/25 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-left text-white font-medium mb-1">
                  Chi desideri contattare *
                </label>
                <select className="w-full p-3 rounded-lg bg-white/15 text-white border border-white/25 focus:outline-none">
                  <option className="text-black">Direzione</option>
                  <option className="text-black">Amministrazione</option>
                  <option className="text-black">Ufficio Personale</option>
                  <option className="text-black">Centrale Operativa</option>
                  <option className="text-black">Ufficio Valori</option>
                </select>
              </div>

              <div>
                <label className="block text-left text-white font-medium mb-1">
                  Oggetto del messaggio *
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 border border-white/25 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-left text-white font-medium mb-1">
                  Messaggio *
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 border border-white/25 focus:outline-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 text-left">
                <input type="checkbox" className="mt-1" />
                <p className="text-gray-200 text-sm">
                  Dichiaro di aver letto ed accettato l’informativa sulla Privacy e autorizzo il trattamento dei miei dati.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition"
              >
                INVIA
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
