import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import VideoQuoteSection from "./components/VideoQuoteSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CertificationsCarousel from "./components/CertificationsCarousel";

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
