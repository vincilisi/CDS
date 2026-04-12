"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ServiceCard({ image, alt, tag, title, text }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);   // attiva animazione
          } else {
            setVisible(false);  // resetta animazione
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        group bg-white shadow-lg rounded-xl overflow-hidden max-w-sm w-full
        transition-all duration-700 hover:-translate-y-2 flex flex-col

        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ minHeight: "550px" }}
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={alt}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          placeholder="blur"
        />
      </div>

      <div className="p-8 text-center flex flex-col flex-grow">
        <p className="text-blue-800 font-semibold mb-1">{tag}</p>

        <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
          {title}
        </h3>

        <p className="text-gray-700 mb-6 flex-grow">{text}</p>

        <button className="bg-blue-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-800 transition">
          LEGGI TUTTO
        </button>
      </div>
    </div>
  );
}
