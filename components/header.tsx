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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (searchQuery.trim() !== "") {
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data.recipes || []);
    } else {
      setSearchResults([]); // Clear results if the query is empty
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setSearchResults([]); // Clear results when the search input is empty
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm backdrop-saturate-150 bg-white/80 border-b border-gray-300/30 text-black shadow-md z-20 mb-4">
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

        {/* Search Bar with Button */}
        <form onSubmit={handleSearch} className="flex items-center space-x-2 w-1/3 md:w-1/4 ml-32">
          <input
            type="text"
            placeholder="Search Recipes"
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-black bg-transparent"
          />
          <button
            type="submit"
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 md:block hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 4a7 7 0 11-7 7 7 7 0 017-7zm0 0a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7zm0 0l7 7"
              />
            </svg>
          </button>
          {/* Search Button for Small Screens */}
          <button
            type="submit"
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 md:hidden"
          >
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
                d="M11 4a7 7 0 11-7 7 7 7 0 017-7zm0 0a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7zm0 0l7 7"
              />
            </svg>
          </button>
        </form>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:relative md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 md:items-center gap-6 p-2 md:p-0">
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

      {/* Display Search Results */}
      {searchResults.length > 0 && (
        <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-lg absolute top-20 left-1/2 transform -translate-x-1/2 w-full md:w-1/3 z-10 text-center">
          <ul>
            {searchResults.map((recipe: any) => (
              <li key={recipe.id} className="py-2">
                <Link href={`/recipes/${recipe.id}`} className="text-black hover:underline">
                  {recipe.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
