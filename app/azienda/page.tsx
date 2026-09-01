import type { Metadata } from "next";
import CompanyHistory from "../components/CompanyHistory";

export const metadata: Metadata = {
  title: "Azienda",
  description:
    "Scopri la storia di CDS Vigilanza - Costantini Divisione Sicurezza, Istituto di Vigilanza attivo nel Veneto dal 1995.",
  keywords: [
    "CDS Vigilanza",
    "Costantini Divisione Sicurezza",
    "Istituto di Vigilanza Venezia",
    "vigilanza armata Veneto",
    "trasporto valori",
  ],
  openGraph: {
    title: "CDS Vigilanza | La nostra storia",
    description:
      "Dal 1995, sicurezza privata, vigilanza armata e trasporto valori nel Veneto.",
    type: "website",
    locale: "it_IT",
  },
};

export default function AziendaPage() {
  return <CompanyHistory />;
}