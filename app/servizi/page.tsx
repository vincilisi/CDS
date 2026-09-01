import type { Metadata } from "next";
import ServicesGrid from "@/app/components/ServicesGrid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Servizi CDS Vigilanza: centrale operativa, vigilanza fissa e mobile, trasporto valori, teleallarme e sicurezza portuale.",
};

export default function Servizi() {
   return (
      <main className="pt-16">
        <Navbar/>
        <ServicesGrid />
        <Footer/>
      </main>
    );
}
