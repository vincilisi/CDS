import ServicesGrid from "@/app/components/ServicesGrid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Servizi() {
   return (
      <main className="pt-16">
        <Navbar/>
        <ServicesGrid />
        <Footer/>
      </main>
    );
}
