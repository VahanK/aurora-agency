import Link from "next/link";
import React from "react";
import { SiInstagram } from "react-icons/si";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
      <MyLinks />
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://www.instagram.com/aurora.creativehouse"
      target="_blank"
      rel="nofollow"
    >
      <SiInstagram />
    </Link>
  </div>
);
