import React from "react";
import Link from "next/link";

const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Apartments",
  "Beach",
  "Treehouse",
  "Cabins",
];

const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-4 shadow-md bg-white flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">StayFinder</Link>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search accommodations..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <Link
          href="/signin"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default function FullHeader() {
  return (
    <>
      <Header />

      {/* Accommodation Types */}
      <nav className="w-full bg-gray-50 px-6 py-2 shadow-sm overflow-x-auto">
        <ul className="flex gap-4 whitespace-nowrap text-sm font-medium text-gray-700">
          {accommodationTypes.map((type) => (
            <li key={type}>
              <Link
                href={`/accommodations/${type.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors"
              >
                {type}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
