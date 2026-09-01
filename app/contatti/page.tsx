import type { Metadata } from "next";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta CDS Vigilanza per informazioni sui servizi di sicurezza a Venezia, in Veneto e nel Nord-Est.",
};

export default function LavoraConNoiPage() {
  return (
    <main className="pt-16">
      <Navbar/>
      <ContactSection />
      <Footer/>
    </main>
  );
}
