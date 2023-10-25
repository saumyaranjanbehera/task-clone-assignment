"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white p-6 relative">
            <div className="container mx-auto flex justify-between items-center">
                <div className="md:hidden flex items-center relative">
                    <button className="text-black" onClick={toggleMenu}>
                        <BiMenu />
                    </button>
                    <div className={`absolute top-10 left-0 w-36 bg-white border border-gray-300 shadow-md transition-all duration-300 ${menuOpen ? 'ml-4' : '-ml-60'}`}>
                        <ul className="flex flex-col space-y-4 p-4">
                            <li>
                                <Link href="/find-talent" className="text-black hover:text-gray-600">
                                    Find Talent
                                </Link>
                            </li>
                            <li>
                                <Link href="/inspiration" className="text-black hover:text-gray-600">
                                    Inspiration
                                </Link>
                            </li>
                            <li>
                                <Link href="/learn-design" className="text-black hover:text-gray-600">
                                    Learn Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobs" className="text-black hover:text-gray-600">
                                    Job
                                </Link>
                            </li>
                            <li>
                                <Link href="/go-pro" className="text-black hover:text-gray-600">
                                    Go Pro
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    <Link href="/find-talent" className="text-black hover:text-gray-600">
                        Find Talent
                    </Link>
                    <Link href="/inspiration" className="text-black hover:text-gray-600">
                        Inspiration
                    </Link>
                    <Link href="/learn-design" className="text-black hover:text-gray-600">
                        Learn Design
                    </Link>
                    <Link href="/jobs" className="text-black hover:text-gray-600">
                        Job
                    </Link>
                    <Link href="/go-pro" className="text-black hover:text-gray-600">
                        Go Pro
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-black text-2xl font-semibold hover:text-gray-600">
                        Dribble
                    </Link>
                </div>
                <div className="sm:hidden lg:block space-x-4">
                    <Link href="/" className="text-black p-2 hover:text-gray-600 inline-block">
                        Log In
                    </Link>
                    <Link href="/" className="text-white inline-block items-center justify-center p-4 h-12 font-semibold rounded-md bg-black hover:bg-gray-500">
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
