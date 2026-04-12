"use client";

import { Playfair_Display, Great_Vibes } from "next/font/google";
import { useEffect, useRef } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const signature = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function VideoQuoteSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current as HTMLElement | null;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        py-24 bg-white 
        transition-all duration-700
      "
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* VIDEO */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl mb-12 spotlight-video">
          <video controls className="w-full h-full object-cover">
            <source
              src="https://www.cdsvigilanza.it/wp-content/uploads/2026/01/video-cds.mp4?_=1"
              type="video/mp4"
            />
            Il tuo browser non supporta il video.
          </video>
        </div>

        {/* FRASE */}
        <p
          className={`
            ${playfair.className}
            text-3xl md:text-2xl font-semibold 
            text-gray-900 leading-relaxed mb-6
            quote-slide
          `}
        >
          Siamo dovunque si trovi un nostro cliente, a tutela dei suoi beni e
          interessi più cari. Vigiliamo con professionalità i vostri valori più
          preziosi.
        </p>

        {/* FIRMA */}
        <p
          className={`
            ${signature.className} 
            text-4xl text-gray-900 mt-4
            signature-fade
          `}
        >
          Helio Costantini
        </p>

      </div>
    </section>
  );
}
