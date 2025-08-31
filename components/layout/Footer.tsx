import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 px-6 py-8 mt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo or Brand */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">StayFinder</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 text-sm text-gray-600">
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
          <Link href="/terms" className="hover:text-blue-600 transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-blue-600 transition-colors">
            Privacy Policy
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} StayFinder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
