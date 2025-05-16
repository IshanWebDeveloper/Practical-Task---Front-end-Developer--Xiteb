import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between ">
      <div className="flex items-center gap-1">
        <h1 className="text-2xl font-bold">Cargo</h1>
        <span className="text-yellow-500 text-2xl">✦</span>
        <span className="text-xs font-semibold mt-2">TON</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 group-first:text-yellow-500 ">
        <div className="flex items-center gap-1 text-sm font-medium text-yellow-500 cursor-pointer ">
          <span>HOME</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-1 text-sm font-medium   cursor-pointer">
          <span>PAGES</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        <span className="text-sm font-medium cursor-pointer">TRACKING</span>
        <div className="flex items-center gap-1 text-sm font-medium cursor-pointer">
          <span>SERVICES</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-1 text-sm font-medium cursor-pointer">
          <span>BLOG</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </nav>
      <div className="flex items-center gap-2">
        <Link
          href="#"
          className="hidden sm:block bg-yellow-500 text-black px-4 py-2 text-sm font-medium cursor-pointer"
        >
          GET A QUOTE
        </Link>
        <Link
          href="#"
          className="hidden sm:block bg-black text-white px-4 py-2 text-sm font-medium cursor-pointer"
        >
          SIGN IN
        </Link>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
