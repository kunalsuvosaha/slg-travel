import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-screen bg-white shadow-sm font-poppins">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold tracking-tight text-dark">
                            <span className="text-primary">Siliguri</span> Travels
                        </h1>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">A unit of Baby Tour and Travels Pvt. Ltd.</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#" className="text-primary font-semibold text-base">Home</a>
                        <a href="#" className="text-dark font-medium hover:text-primary transition-colors text-base">About</a>
                        <a href="#" className="text-dark font-medium hover:text-primary transition-colors text-base">Tour Packages</a>
                        <a href="#" className="text-dark font-medium hover:text-primary transition-colors text-base">Why Us</a>
                        <a href="#" className="text-dark font-medium hover:text-primary transition-colors text-base">Contact Us</a>
                    </div>

                    {/* CTA Button (Desktop) - Match Visuals */}
                    <div className="hidden md:flex items-center h-full">
                        <div className="relative h-20 flex items-center bg-primary pl-10 pr-8 ml-6 rounded-bl-[40px]">
                            {/* Decorative light blue curve */}
                            <div className="absolute left-[-25px] top-0 h-full w-24 bg-accent rounded-bl-[40px] z-0 skew-x-[-15deg]"></div>

                            <div className="z-10 flex items-center space-x-3">
                                <div className="bg-secondary p-2.5 rounded-full shadow-md">
                                    <Phone size={20} fill="white" className="text-white" />
                                </div>
                                <div className="flex flex-col leading-none text-white">
                                    <span className="text-[11px] font-medium opacity-90 mb-0.5">Call Anytime</span>
                                    <span className="font-bold text-lg">+91 90888 8888</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-dark focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden bg-white pb-4">
                        <a href="#" className="block py-2 px-4 text-primary font-medium hover:bg-gray-50">Home</a>
                        <a href="#" className="block py-2 px-4 text-dark hover:bg-gray-50">About</a>
                        <a href="#" className="block py-2 px-4 text-dark hover:bg-gray-50">Tour Packages</a>
                        <a href="#" className="block py-2 px-4 text-dark hover:bg-gray-50">Why Us</a>
                        <a href="#" className="block py-2 px-4 text-dark hover:bg-gray-50">Contact Us</a>
                        <div className="mt-4 px-4">
                            <div className="flex items-center space-x-3 bg-primary text-white p-3 rounded-lg w-fit">
                                <Phone size={18} fill="white" />
                                <div>
                                    <div className="text-xs">Call Anytime</div>
                                    <div className="font-bold">+91 90888 8888</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
