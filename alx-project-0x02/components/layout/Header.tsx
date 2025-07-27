import React from "react";
import Link from "next/link";
import Home from "@/pages/home";
import About from "@/pages/about";

const Header: React.FC = () => {
    return(
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Application</h1>
                <nav className="space-x-4">
                    <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link href="/about" className="text-white hover:text-gray-300">About</Link>
                </nav>
            </div>
        </header>
    )
}
export default Header;