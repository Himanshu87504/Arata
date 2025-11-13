import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { SiAudiobookshelf } from "react-icons/si";
import { BsMinecartLoaded } from "react-icons/bs";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = ["Home", "BYOB", "Shop All", "Concerns", "About Us"];

    return (
        <div className="absolute top-5  w-full">
            <nav className="bg-[#F0F5FF] shadow-sm px-4 md:px-2 py-3 relative flex items-center justify-between h:10 md:h-15 rounded-full ml-2 mr-2">

                <div className="flex items-center">

                    {!open && (
                        <div
                            className="lg:hidden flex flex-col justify-center items-start cursor-pointer z-40"
                            onClick={() => setOpen(true)}
                        >
                            <span className="h-0.5 w-6 bg-[#3C62A1] rounded mb-1"></span>
                            <span className="h-0.5 w-6 bg-[#3C62A1] rounded mb-1"></span>
                            <span className="h-0.5 w-6 bg-[#3C62A1] rounded"></span>
                        </div>
                    )}

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-4 text-[#002b6b] ml-4 p-2 whitespace-nowrap">
                        {links.map((link, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className={`px-4 py-1 rounded-full transition hover:bg-[#DAE7FF] hover:border-2 border-[#7592C4] ${idx === 0 ? "text-white bg-[#002b6b]" : "text-[#002b6b]"
                                    }`}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CENTER LOGO */}
                <div className="absolute left-1/2 transform -translate-x-1/2 text-[#002b6b] font-semibold tracking-[0.2em] text-xl whitespace-nowrap z-10">
                    A R A T A
                </div>

                {/* RIGHT: Desktop Icons */}
                <div className="flex items-center space-x-6 text-2xl pr-3 text-[#002b6b]">
                    <button><IoIosSearch /></button>
                    <button><CgProfile /></button>
                    <button><SiAudiobookshelf /></button>
                    <button><BsMinecartLoaded /></button>
                </div>

                {/* MOBILE MENU */}
                <div
                    className={`fixed top-0 left-0 h-screen w-full bg-[#f5f8ff] shadow-lg flex flex-col items-start space-y-6 px-8 pt-24 text-[#002b6b] transition-transform duration-300 ease-in-out lg:hidden ${open ? "translate-x-0" : "-translate-x-full"
                        } z-30`}
                >
                    {/* CROSS BUTTON */}
                    <button
                        className="absolute top-6 right-4 text-lg w-8 h-8 font-bold border rounded-full hover:bg-[#113F8A] hover:text-white flex items-center justify-center"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </button>

                    {/* Mobile Links */}
                    {links.map((link, idx) => (
                        <div
                            key={idx}
                            className="w-full border-b border-gray-300 pb-2"
                            onClick={() => setOpen(false)}
                        >
                            <a href="#" className="hover:text-[#001f4f] text-lg">
                                {link}
                            </a>
                        </div>
                    ))}
                </div>

                {/* BACKDROP */}
                {open && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30 lg:hidden z-20"
                        onClick={() => setOpen(false)}
                    ></div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
