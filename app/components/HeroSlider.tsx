"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/media/cds-vigilanza.jpg",
  "/media/cds-sala-controllo.jpg",
  "/media/cds-mezzi.jpg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const zoomIn = index % 2 === 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((src, i) => {
        const isActive = i === index;

        return (
          <Image
            key={i}
            src={src}
            alt="Hero background"
            fill
            priority={i === 0}
            className={`
              object-cover
              object-[center_30%] sm:object-center
              transition-opacity duration-[2000ms]
              transition-transform duration-[12000ms]
              ${isActive ? "opacity-100" : "opacity-0"}
              ${isActive
                ? zoomIn
                  ? "scale-[1.12]"
                  : "scale-[1.00]"
                : "scale-[1.00]"
              }
            `}
          />
        );
      })}

      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}
