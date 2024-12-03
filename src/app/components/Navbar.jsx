'use client'; // Ensures this component is client-side in Next.js

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#e4e4e4] text-gray-800 px-4 py-6 border-b border-[#9e9e9e] z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-lg font-bold flex-shrink-0">
                    <Link href="/" className="hover:text-gray-600">
                        VYRA
                    </Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden flex-shrink-0 z-99">
                    <button
                        className="text-gray-800 hover:text-gray-600 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Links */}
                <ul
                    className={`absolute md:relative top-16 md:top-auto left-0 right-0 md:flex md:items-center md:space-x-4 bg-[#e4e4e4] md:bg-transparent p-4 md:p-0 z-40 transform ${isMenuOpen ? 'block' : 'hidden'
                        } md:block`}
                >
                    <li className="md:inline">
                        <Link href="/about" className="block md:inline text-gray-800 hover:text-gray-600">
                            About
                        </Link>
                    </li>
                    <li className="md:inline">
                        <Link href="/contact" className="block md:inline text-gray-800 hover:text-gray-600">
                            Contact
                        </Link>
                    </li>
                    <li className="md:inline">
                        <Link href="/AI/Coach" className="block md:inline text-gray-800 hover:text-gray-600">
                            AI Coach
                        </Link>
                    </li>
                    <li className="md:inline">
                        <Link href="/AI/Analysis" className="block md:inline text-gray-800 hover:text-gray-600">
                            AI Analysis
                        </Link>
                    </li>
                </ul>


                {/* Join Button */}
                <div className="hidden md:block flex-shrink-0">
                    <Link href="/join">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Join Now
                        </button>
                    </Link>
                </div>
            </div>

            {/* Mobile Join Button */}
            {isMenuOpen && (
                <div className="md:hidden mt-4">
                    <Link href="/join">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                            Join Now
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
