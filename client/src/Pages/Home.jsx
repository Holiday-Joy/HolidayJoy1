import React from 'react'
import logo from "../assets/banner1.jpg";
import { Carousel } from "flowbite-react";
import Categories from '../component/Categories';
import FeaturedStay from '../component/FeaturedStay';
import Faq from '../component/Faq';
import TimeLine from '../component/TimeLine';
import {
    hero1, hero2, hero3, hero4, shakleshpura, list1,
    list2,
    list3,
    list4,
    list5,
    list6,
} from '../assets'
import { Link } from 'react-router-dom'
import Search from '../component/HomeStays/Search';
const Home = () => {
    return (
        <div className=''>
            <div className="relative w-full  pb-20 h-[80vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh]">
                <Carousel className="h-full">
                    <img src={hero1} alt="slider" className="object-cover w-full h-full" />
                    <img src={hero2} alt="slider" className="object-cover w-full h-full" />
                    <img src={hero3} alt="slider" className="object-cover w-full h-full" />
                    <img src={hero4} alt="slider" className="object-cover w-full h-full" />
                </Carousel>
                <div className="absolute top-[40%] sm:top-[25%] md:top-[40%] lg:top-[40%] xl:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <Search />
                </div>
            </div>
            <Categories />
            <FeaturedStay />

            <section className='w-full flex justify-center items-center flex-col py-24 bg-gray-200'>
                <div className='w-[80%] flex flex-col justify-center items-center overflow-hidden'>
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
                            <button className=' py-24 px-28 text-4xl text-red-400 border-gray-300 hover:bg-red-200 border-[2px] rounded-full tracking-wider font-bold'>
                                LIST <br /> NOW
                            </button>
                        </Link>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full overflow-hidden shadow-2xl">
                            <img src={list1} className="w-[8rem] h-[8rem]  " />
                        </div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-[-70%] -translate-y-[-55%]  rounded-full overflow-hidden shadow-2xl ">
                            <img src={list2} className="w-[8rem] h-[8rem]" />
                        </div>
                        <div className="absolute top-1/2 right-0 transform translate-x-[-20%] translate-y-[15%] rounded-full overflow-hidden shadow-2xl">
                            <img src={list3} className="w-[8rem] h-[8rem]" />
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2  rounded-full overflow-hidden">
                            <img src={list4} className="w-[8rem] h-[8rem]" />
                        </div>
                        <div className="absolute top-1/2 left-0 transform translate-x-[20%] translate-y-[-100%] rounded-full overflow-hidden shadow-2xl">
                            <img src={list5} className="w-[8rem] h-[8rem]" />
                        </div>
                        <div className="absolute top-1/2 left-0 transform translate-x-[20%] translate-y-[15%] rounded-full overflow-hidden shadow-2xl">
                            <img src={list6} className="w-[8rem] h-[8rem]" />
                        </div>
                    </div>
                </div>
            </section>

            <TimeLine />
            <Faq />
        </div >
    )
}

export default Home;
