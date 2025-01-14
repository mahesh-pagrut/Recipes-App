'use client';

import { useState } from 'react';
import Link from 'next/link';

const routes = [
    { name: 'Recipes', route: '/recipes' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm backdrop-saturate-150 bg-white/80 border-b border-gray-300/30 text-black shadow-md z-20">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-lg font-semibold">
          <Link href={"/"}>My Recipe App</Link>
        </h1>

        {/* Hamburger Menu (Visible on Small Screens) */}
        <button
          className="block md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle Menu</span>
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18m-9 6h9"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:relative md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 md:items-center gap-10 p-2 md:p-0 ">
            {routes.map((route) => (
              <li key={route.route} className="py-2 md:py-0">
                <Link
                  href={route.route}
                  className="hover:underline block text-center"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
