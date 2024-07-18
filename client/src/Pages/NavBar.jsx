import React, { useState } from 'react';
import logo from "../assets/HolidayJoy-Logo.png";
import wtsapp from "../assets/whatsapp-icon.svg";
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full h-auto fixed top-0 left-0 z-50 backdrop-blur-sm bg-black/10  lg:flex lg:justify-center lg:items-center ">
            <nav className="w-full lg:w-[80%] flex items-center justify-between px-2 py-1 md:p-4  ">
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt="logo" width={150} className="py-2" />
                    </Link>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-6">
                    <Link to="/">
                        <span className="py-4 px-3 text-lg font-normal">Home</span>
                    </Link>
                    <Link to="/properties">
                        <span className="py-4 px-3 text-lg font-normal">Stays</span>
                    </Link>
                    <Link to="/blog">
                        <span className="py-4 px-3 text-lg font-normal">Blogs</span>
                    </Link>
                </div>
                <div className="hidden md:flex md:items-center gap-2">
                    <div className="hidden md:flex md:items-center md:space-x-5">

                        <Link to="/list">
                            <button className="py-2 px-4 border-2 rounded-3xl tracking-wider font-medium text-black bg-orange-400 border-orange-400 hover:bg-white hover:border-orange-400 transition">
                                Host property
                            </button>
                        </Link>
                    </div>
                    <a
                        href="#"
                        className="rounded-lg px-4 py-2 text-sm font-medium  border-2 bg-gray-200 text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300"
                    >
                        Login
                    </a>
                    <a
                        href="#"
                        className="rounded-lg px-4 py-2 text-sm font-medium border-2 bg-gray-200  text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300"
                    >
                        Sign up
                    </a>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                    </button>
                </div>
            </nav>
            <div
                className={`md:hidden backdrop-blur-sm bg-black/10  transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                    }`}
            >
                <Link to="/" className="block py-2 px-3 text-lg font-normal" onClick={toggleMenu}>
                    Home
                </Link>
                <Link to="/properties" className="block py-2 px-3 text-lg font-normal" onClick={toggleMenu}>
                    Stays
                </Link>
                <Link to="/blog" className="block py-2 px-3 text-lg font-normal" onClick={toggleMenu}>
                    Blogs
                </Link>
                <span className="block py-2 px-3 cursor-pointer" onClick={toggleMenu}>
                    <img src={wtsapp} alt="wtapp" width={40} />
                </span>
                <Link to="/list" className="block py-2 px-3" onClick={toggleMenu}>
                    <button className="w-full py-2 px-4 border-2 rounded-3xl tracking-wider font-medium text-black bg-orange-400 border-orange-400 hover:bg-white hover:border-orange-400 transition">
                        List your property
                    </button>
                </Link>
                <div className=' flex flex-col gap-3 '>
                    <Button href="#" className="w-full">
                        Login
                    </Button>
                    <Button href="#" className="w-full">
                        Sign up
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
