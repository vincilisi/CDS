"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";

interface ServiceCardProps {
  image: ImageProps["src"];
  alt: string;
  tag: string;
  title: string;
  text: string;
}

export default function ServiceCard({ image, alt, tag, title, text }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        group flex w-full max-w-sm flex-col overflow-hidden border border-[#d3dbd5] bg-white shadow-sm
        transition-all duration-500 hover:-translate-y-1 hover:shadow-lg
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ minHeight: "470px" }}
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={alt}
          width={600}
          height={200}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-grow flex-col p-7 text-left">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-[#91712f]">{tag}</p>

        <h3 className="mb-3 text-2xl font-bold text-[#142331]">
          {title}
        </h3>

        <p className="flex-grow text-slate-700">{text}</p>

      </div>
    </div>
  );
}
