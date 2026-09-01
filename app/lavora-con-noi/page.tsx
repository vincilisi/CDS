import type { Metadata } from "next";
import WorkWithUsSection from "../components/WorkWithUsSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Lavora con noi",
  description:
    "Invia la tua candidatura a CDS Vigilanza, Istituto di Vigilanza attivo nel Veneto.",
};

export default function LavoraConNoiPage() {
  return (
    <main className="pt-16">
      <Navbar/>
      <WorkWithUsSection />
      <Footer/>
    </main>
  );
}
