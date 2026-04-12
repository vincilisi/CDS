"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-blue-900 text-white text-2xl
        flex items-center justify-center
        shadow-lg transition-all duration-300
        hover:bg-blue-800 hover:scale-110
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      ↑
    </button>
  );
}
