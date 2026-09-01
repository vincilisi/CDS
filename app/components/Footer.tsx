import Image from "next/image";
import Link from "next/link";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=Via+Pietro+Pinton+4%2C+30175+Venezia";

export default function Footer() {
  return (
    <footer className="bg-[#10293a] text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-[1.2fr_1fr_0.8fr] md:px-10">
        <div>
          <Image src="/media/logo-cds-vigilanza-2019-bianco.png" alt="CDS Vigilanza" width={112} height={56} />
          <address className="mt-6 not-italic text-sm leading-7 text-slate-300">
            Via Pietro Pinton 4<br />
            30175 Venezia (VE)<br />
            Tel. <a className="transition hover:text-[#e5c988]" href="tel:+39041978077">+39 041 978077</a><br />
            Centrale <a className="transition hover:text-[#e5c988]" href="tel:+393939038078">+39 393 9038078</a>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#e5c988]">CDS Vigilanza</h2>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            P.IVA / CF 04084580275<br />
            R.E.A. 364277 - C.C.I.A.A. VE<br />
            Licenza di Polizia 3611/2024/I.V./P.A.<br />
            Prefettura di Venezia - Paola Lazzari<br />
            <a className="transition hover:text-[#e5c988]" href="mailto:cdsvigilanza@pec.it">cdsvigilanza@pec.it</a>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#e5c988]">Navigazione</h2>
          <nav className="mt-5 flex flex-col gap-3 text-sm" aria-label="Link del footer">
            <Link className="transition hover:text-[#e5c988]" href="/azienda">Azienda</Link>
            <Link className="transition hover:text-[#e5c988]" href="/servizi">Servizi</Link>
            <Link className="transition hover:text-[#e5c988]" href="/contatti">Contatti</Link>
            <a className="mt-3 w-fit border border-[#d8b46c] px-4 py-2 font-semibold text-[#f5dfaa] transition hover:bg-[#d8b46c] hover:text-[#10293a]" href={mapUrl} target="_blank" rel="noreferrer">Apri in Google Maps</a>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-10"><p>© 2026 CDS S.R.L. - Tutti i diritti riservati</p><Image src="/media/20-cds.png" alt="20 anni CDS Vigilanza" width={44} height={44} /></div></div>
    </footer>
  );
}