"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="bg-[#383838] text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center">
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                    <span className="ml-2 text-xl font-bold text-[#F4F4F3]">BrandName</span>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="px-4 py-2 hover:text-[#EC5C39]">Home</Link>
                    <Link href="/portfolio" className="px-4 py-2 hover:text-[#EC5C39]">Portfolio</Link>
                    <Link href="/philosophy" className="px-4 py-2 hover:text-[#EC5C39]">Philosophy</Link>
                    <Link href="/contact" className="px-4 py-2 hover:text-[#EC5C39]">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;