import React from 'react'
import logo from "../assets/banner1.jpg";
import { Carousel } from "flowbite-react";
import Categories from '../component/Categories';
import FeaturedStay from '../component/FeaturedStay';
import Faq from '../component/Faq';
import TimeLine from '../component/TimeLine';
import { shakleshpura } from '../assets'
import { Link } from 'react-router-dom'
import Search from '../component/HomeStays/Search';
const Home = () => {
    return (
        <div>
            <div className="relative pb-20 h-96 sm:h-96 xl:h-96 2xl:h-96">
                <Carousel className='lg:h-[30rem]'>
                    <img src={logo} alt="slider" />
                    <img src={logo} alt="slider" />
                    <img src={logo} alt="slider" />
                    <img src={logo} alt="slider" />
                </Carousel>
                <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/8">
                    <Search />
                </div>
            </div>
            <Categories />
            <FeaturedStay />
            <TimeLine />
            <section className='w-full flex justify-center items-center flex-col'>
                <div className='w-[80%] flex flex-col justify-center items-center'>
                    <div className='justify-center items-center py-10'>
                        <section className='w-full flex-col justify-center items-center'>
                            <h1 className='text-4xl'>List your property here!</h1>
                            <h1 className='text-5xl text-red-400 font-bold'>Guests will contact you directly.</h1>
                        </section>
                        <section>
                            <p className='text-lg'>
                                We'll showcase it to the right guests, enhancing your booking chances.
                            </p>
                        </section>
                    </div>
                    <div class="relative min-w-[30rem] h-[25rem] flex justify-center items-center ">
                        <Link to={"/list"}>
                            <button className=' py-24 px-28 text-4xl text-red-400 border-gray-300 hover:bg-slate-200 border-[2px] rounded-full tracking-wider font-bold'>
                                LIST <br /> NOW
                            </button>
                        </Link>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full overflow-hidden">
                            <img src={shakleshpura} className="w-[8rem] h-[8rem]" />
                        </div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-[-70%] -translate-y-[-55%]  rounded-full overflow-hidden ">
                            <img src={shakleshpura} className="w-[8rem] h-[8rem]" />
                        </div>
                        <div className="absolute top-1/2 right-0 transform translate-x-[-20%] translate-y-[15%] rounded-full overflow-hidden">
                            <img src={shakleshpura} className="w-[8rem] h-[8rem]" />
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2  rounded-full overflow-hidden">
                            <img src={shakleshpura} className="w-[8rem] h-[8rem]" />
                        </div>
                        <div className="absolute top-1/2 left-0 transform translate-x-[20%] translate-y-[-100%] rounded-full overflow-hidden">
                            <img src={shakleshpura} className="w-[8rem] h-[8rem]" />
                        </div>
                        <div className="absolute top-1/2 left-0 transform translate-x-[20%] translate-y-[15%] rounded-full overflow-hidden">
                            <img src={shakleshpura} className="w-[8rem] h-[8rem]" />
                        </div>
                    </div>
                </div>
            </section>
            <Faq />
        </div>
    )
}

export default Home
