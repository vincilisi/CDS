"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const certifications = [
  "/media/CDS-142-b.png",
  "/media/CDS-145-b.png",
  "/media/CDS-2600.png",
  "/media/CDS-9001.png",
  "/media/CDS-14001.png",
  "/media/CDS-45001.png",
  "/media/04084580275.png",
  "/media/cds-certificazioni-security-manager.jpg"
];

export default function CertificationsCarousel() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [modalImg, setModalImg] = useState<string | null>(null);

  useEffect(() => {
    const el = sectionRef.current as HTMLElement | null;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
        } else {
          el.classList.remove("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="
          w-full py-16 bg-gray-50 
          opacity-0 translate-y-6 
          transition-all duration-700
        "
      >
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl font-semibold text-blue-900">
            Certificazioni e Accreditamenti
          </h2>
          <p className="text-gray-600 mt-2">
            Standard di qualità riconosciuti a livello nazionale
          </p>
        </div>

        {/* CAROSELLO */}
        <div className="overflow-hidden relative">
          <div className="flex items-center gap-6 animate-scroll-slow">

            {certifications.concat(certifications).map((src, i) => (
              <div
                key={i}
                className="
                  flex-shrink-0 
                  h-[360px]
                  flex 
                  items-center 
                  justify-center
                  cursor-pointer
                  border border-blue-900/40
                  rounded-lg
                  bg-white
                  shadow-sm
                  p-3
                "
                onClick={() => setModalImg(src)}
              >
                <Image
                  src={src}
                  alt="Certificazione"
                  width={300}
                  height={360}
                  className="
                    object-contain 
                    max-h-full 
                    w-auto
                    opacity-90 
                    hover:opacity-100 
                    transition 
                  "
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalImg && (
        <div
          className="
            fixed inset-0 bg-black/70 
            flex items-center justify-center 
            z-50 p-4
          "
          onClick={() => setModalImg(null)}
        >
          <div className="max-w-4xl max-h-[90vh]">
            <Image
              src={modalImg}
              alt="Certificazione"
              width={400}
              height={600}
              className="object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
