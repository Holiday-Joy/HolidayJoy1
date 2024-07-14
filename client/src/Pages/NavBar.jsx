import React from 'react'
import logo from "../assets/HolidayJoy-Logo.png"
import wtsapp from "../assets/whatsapp-icon.svg"
import { Link } from 'react-router-dom';
import { Button, MegaMenu, Navbar } from 'flowbite-react';
const NavBar = () => {
    return (
        <div className='w-full h-auto'>
            <section className=' w-full flex justify-evenly items-center border-[4px]'>
                <div className='flex'>
                    <Link to={'/'}>
                        <img src={logo} alt="logo" width={150} className='py-4' />
                    </Link>
                </div>
                <div className='flex hover:cursor-pointer'>
                    <Link to={'/'}>
                        <span className='py-4 px-7 text-lg font-normal'>Home</span>
                    </Link>
                    <Link to={'/properties'}>
                        <span className='py-4 px-7 text-lg font-normal'>Stays</span>
                    </Link>
                    <Link to={'/blog'}>
                        <span className='py-4 px-7 text-lg font-normal'>Blogs</span>
                    </Link>

                </div>
                <div className='flex gap-5 items-center'>
                    <span className=' hover:transform hover:ease-in-out hover:delay-00 hover:-translate-y-1 cursor-pointer'>
                        <img src={wtsapp} alt="wtapp" width={40} />
                    </span>
                    <Link to={"/list"}>
                        <button className=' py-2 px-8 border-[2px] hover:border-orange-400 hover:bg-white  rounded-3xl tracking-wider font-medium  text-black bg-orange-400 border-orange-400 hover:ease-in delay-100 '>
                            List your property
                        </button>
                    </Link>
                </div>
                <div className="order-2 hidden items-center md:flex">
                    <a
                        href="#"
                        className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
                    >
                        Login
                    </a>
                    <Button href="#">Sign up</Button>
                </div>
            </section>
            {/* <MegaMenu>
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-around p-4 md:space-x-8">
                    <Navbar.Brand href="/">
                        <img alt="" src={logo} className="mr-3 h-6 sm:h-9" />
                    </Navbar.Brand>

                    <div className="order-2 hidden items-center md:flex">
                        <a
                            href="#"
                            className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
                        >
                            Login
                        </a>
                        <Button href="#">Sign up</Button>
                    </div>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link href="#">Home</Navbar.Link>
                        <MegaMenu.Dropdown toggle={<>Company</>}>
                            <ul className="grid grid-cols-3">
                                <div className="space-y-4 p-4">
                                    <li>
                                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                            Library
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                            Resources
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                            Pro Version
                                        </a>
                                    </li>
                                </div>
                                <div className="space-y-4 p-4">
                                    <li>
                                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                            Support Center
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                            Terms
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                            Blog
                                        </a>
                                    </li>
                                </div>
                                <div className="space-y-4 p-4">
                                    <li>
                                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                            Newsletter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                            Playground
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                            License
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </MegaMenu.Dropdown>
                        <Navbar.Link href="#">Team</Navbar.Link>
                    </Navbar.Collapse>
                    <div className='flex gap-5 items-center'>
                        <span className=' hover:transform hover:ease-in-out hover:delay-00 hover:-translate-y-1 cursor-pointer'>
                            <img src={wtsapp} alt="wtapp" width={40} />
                        </span>
                        <button className=' py-2 px-8 border-[2px] hover:border-orange-400 hover:bg-white  rounded-3xl tracking-wider font-medium  text-black bg-orange-400 border-orange-400 hover:ease-in delay-100 '>
                            List your property
                        </button>
                    </div>
                </div>
            </MegaMenu> */}
        </div>
    )
}

export default NavBar;
