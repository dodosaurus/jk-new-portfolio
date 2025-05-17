"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import Image from "next/image";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 rounded-full shadow-2xl flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      <div className="w-[2.5rem] h-[2.5rem] relative">
        <Image
          src={theme === "light" ? "/dodo-pharmacist.png" : "/dodo-programmer.png"}
          alt="Theme toggle"
          fill
          className="object-cover rounded-full"
        />
      </div>
    </button>
  );
}
