// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#e4e4e4] text-white px-4 py-6 border-b border-[#9e9e9e] z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo on the left, wrapped with Link to navigate to home */}
                <div className="text-lg font-bold text-gray-800 flex-shrink-0">
                    <Link href="/" className="text-gray-800 hover:text-gray-600">
                        MyNextApp
                    </Link>
                </div>
                
                {/* Links in the center */}
                <ul className="flex space-x-4 flex-1 justify-center">
                    <li>
                        <Link href="/about" className="text-gray-800 hover:text-gray-600">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-800 hover:text-gray-600">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/AI/Coach" className="text-gray-800 hover:text-gray-600">
                            AI Coach
                        </Link>
                    </li>
                    <li>
                        <Link href="/AI/Analysis" className="text-gray-800 hover:text-gray-600">
                            AI Analysis
                        </Link>
                    </li>
                </ul>
                
                <div className="flex-shrink-0">
                    <Link href="/join">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Join Now
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;