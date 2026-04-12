"use client";

import { useState } from "react";

export default function WorkWithUsSection() {
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
    <section
      className="relative w-full min-h-screen bg-[url('/media/cds-vigilanza.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Lavora con noi</h1>
        <p className="text-gray-200 text-lg mb-10">
          Compila accuratamente il modulo per inviare la tua candidatura
        </p>

        {sent ? (
          <div className="w-full p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-white text-xl animate-fadeIn">
            <p className="font-semibold mb-2">Dati inviati con successo</p>
            <p className="text-gray-200">Sarai ricontattato quanto prima.</p>
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
                <label className="block text-left text-white font-medium mb-1">Nome *</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 border border-white/25 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-left text-white font-medium mb-1">Cognome *</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 border border-white/25 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-left text-white font-medium mb-1">Telefono *</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 border border-white/25 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-left text-white font-medium mb-1">Email *</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 border border-white/25 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-left text-white font-medium mb-1">Breve presentazione *</label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 border border-white/25 focus:outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-left text-white font-medium mb-1">
                Carica CV (PDF / DOC max 3MB)
              </label>
              <input type="file" className="w-full text-white" />
            </div>

            <div className="flex items-start gap-3 text-left">
              <input type="checkbox" className="mt-1" />
              <p className="text-gray-200 text-sm">
                Dichiaro di aver letto ed accettato l’informativa sulla Privacy.
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
