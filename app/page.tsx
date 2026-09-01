import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import VideoQuoteSection from "./components/VideoQuoteSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CertificationsCarousel from "./components/CertificationsCarousel";

export const metadata: Metadata = {
  description:
    "CDS Vigilanza: servizi di sicurezza, vigilanza armata, trasporto valori e tecnologie per aziende e infrastrutture nel Veneto.",
  openGraph: {
    title: "CDS Vigilanza | Sicurezza per aziende e infrastrutture",
    description:
      "Vigilanza armata, trasporto valori e sicurezza integrata a Venezia e nel Veneto.",
    locale: "it_IT",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <ServicesSection/>
        <CertificationsCarousel/>
        <VideoQuoteSection/>
        <Footer/> 
        <BackToTop />

      </div>
    </main>
  );
}
