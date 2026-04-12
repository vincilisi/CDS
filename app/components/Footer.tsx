"use client";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [openMap, setOpenMap] = useState(false);

  return (
    <>
      {/* MODAL FULLSCREEN MAP */}
      {openMap && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setOpenMap(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[70vh] rounded-xl overflow-hidden shadow-2xl animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=Via+Pietro+Pinton+4,+30175+Venezia`}
            ></iframe>

            <button
              onClick={() => setOpenMap(false)}
              className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white px-3 py-1 rounded-md text-sm"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#0d0d0d] text-gray-300 pt-10 pb-6 h-[5vh]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* COLONNA SINISTRA — CONTATTI + LOGHI (TUTTO CENTRATO) */}
          <div className="flex flex-col items-center text-center space-y-6">

            {/* CONTATTI */}
            <div className="space-y-2 text-[16px] leading-relaxed text-gray-300">
              <h3 className="text-lg font-semibold text-white mb-2">Contatti</h3>
              <p>
                Via Pietro Pinton 4 – 30175 Venezia (VE)<br />
                Tel: +39 041 978077<br />
                Fax: +39 041 5053203<br />
                Centrale: +39 393 9038078<br />
                Email: ufficio.personale@costantinidivisionesicurezza.it
              </p>
            </div>

            {/* LOGHI CENTRATI */}
            <div className="flex items-center justify-center gap-6 pt-2">
              <Image
                src="/media/logo-cds-vigilanza-2019-bianco.png"
                alt="CDS Vigilanza"
                width={90}
                height={45}
                className="opacity-90 hover:opacity-100 transition"
              />

              <Image
                src="/media/20-cds.png"
                alt="20 anni"
                width={45}
                height={45}
                className="opacity-90 hover:opacity-100 transition"
              />
            </div>
          </div>

          {/* COLONNA DESTRA — INFO AZIENDALI + MAPPA (TUTTO CENTRATO) */}
          <div className="flex flex-col items-center text-center space-y-6">

            {/* INFO AZIENDALI */}
            <div className="space-y-2 text-[16px] leading-relaxed text-gray-300">
              <h3 className="text-lg font-semibold text-white mb-2">CDS Vigilanza</h3>
              <p>
                P.IVA / CF 04084580275<br />
                Codice Univoco SUBM70N<br />
                R.E.A. 364277 – C.C.I.A.A. VE<br />
                Licenza Polizia 298/2001/DIV P.A.<br />
                Prefettura di Venezia – Helio Costantini<br />
                Pec: cdsvigilanza@pec.it
              </p>
            </div>

            {/* MAPPA PICCOLA QUADRATA CENTRATA */}
            <div
              className="relative w-32 h-32 rounded-xl overflow-hidden border border-white/10 backdrop-blur-md bg-white/5 shadow-xl cursor-pointer group"
              onClick={() => setOpenMap(true)}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>

              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0, pointerEvents: "none" }}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=Via+Pietro+Pinton+4,+30175+Venezia`}
                className="opacity-80 group-hover:opacity-100 transition"
              ></iframe>
            </div>

          </div>

        </div>

        {/* LINEA DIVISORIA */}
        <div className="border-t border-gray-800 mt-10 pt-4 text-center">
          <p className="text-xs text-gray-500">
            © 2019 CDS S.R.L. – Tutti i diritti riservati
          </p>
        </div>
      </footer>

      {/* ANIMAZIONI */}
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-zoomIn {
          animation: zoomIn 0.25s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0 }
          to { transform: scale(1); opacity: 1 }
        }
      `}</style>
    </>
  );
}
