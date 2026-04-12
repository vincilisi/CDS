"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="w-full px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            className="w-32 h-auto"
            src="/media/logo.svg"
            width={140}
            height={40}
            alt="Logo CDS Vigilanza"
          />
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

          <li className="relative group cursor-pointer">
            <Link href="/" className="hover:text-blue-900 transition">Home</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group cursor-pointer">
            <Link href="/azienda" className="hover:text-blue-900 transition">Azienda</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group cursor-pointer">
            <Link href="/lavora-con-noi" className="hover:text-blue-900 transition">Lavora con noi</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group cursor-pointer">
            <Link href="/servizi" className="hover:text-blue-900 transition">Servizi</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group cursor-pointer">
            <Link href="/contatti" className="hover:text-blue-900 transition">Contatti</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
          </li>

        </ul>

        {/* CTA DESKTOP */}
        <Link
          href="/contatti"
          className="
            hidden md:block 
            px-8 py-3 
            rounded-xl 
            font-semibold 
            tracking-wide 
            backdrop-blur-lg 
            bg-white/20 
            border border-white/40 
            text-blue-900 
            shadow-lg 
            transition-all 
            duration-300 
            hover:bg-white/30 
            hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] 
            hover:scale-[1.07]
          "
        >
          Richiedi Preventivo
        </Link>

        {/* HAMBURGER MOBILE */}
        <button
          className="md:hidden text-3xl text-blue-900"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 pt-2 flex flex-col gap-1 text-gray-700 font-medium">

          <Link href="/" className="py-3 border-b border-gray-200 hover:text-blue-900 transition">
            Home
          </Link>

          <Link href="/azienda" className="py-3 border-b border-gray-200 hover:text-blue-900 transition">
            Azienda
          </Link>

          <Link href="/lavora-con-noi" className="py-3 border-b border-gray-200 hover:text-blue-900 transition">
            Lavora con noi
          </Link>

          <Link href="/servizi" className="py-3 border-b border-gray-200 hover:text-blue-900 transition">
            Servizi
          </Link>

          <Link href="/contatti" className="py-3 border-b border-gray-200 hover:text-blue-900 transition">
            Contatti
          </Link>

          {/* CTA MOBILE */}
          <Link
            href="/contatti"
            className="
              mt-3 
              w-full 
              px-6 py-3 
              rounded-xl 
              font-semibold 
              tracking-wide 
              bg-blue-900 
              text-white 
              shadow-lg 
              transition-all 
              duration-300 
              hover:bg-blue-800 
              hover:scale-[1.03]
            "
          >
            Richiedi Preventivo
          </Link>
        </div>
      )}
    </nav>
  );
}
