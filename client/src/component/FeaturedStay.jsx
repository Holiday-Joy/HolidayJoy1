import React from 'react';
import PackageCard from './PackageCard';
import { Tabs } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FeaturedStay = () => {
    // https://holidayjoyvecation.onrender.com/api/v1/properties?keyword=banglore&limit=4

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-full md:w-[80%]'>
                <h1 className='pt-6 pb-4 text-3xl md:text-4xl font-semibold tracking-wider text-center'>Featured Stay</h1>
            </div>
            <section className='w-full md:w-[80%] flex flex-col md:flex-row justify-start items-center py-10'>
                <Tabs aria-label="Default tabs" variant="default" className='w-auto'>
                    <Tabs.Item active title="All" className='flex justify-start'>
                        <div className='w-full flex flex-wrap gap-4 md:gap-7 justify-center'>
                            {[...Array(4)].map((_, index) => (
                                <Link to={'/properties'} key={index}>
                                    <PackageCard />
                                </Link>
                            ))}
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Shakleshpura">
                        <div className='w-full  flex-wrap gap-4 md:gap-7 flex justify-start'>
                            {[...Array(3)].map((_, index) => (
                                <PackageCard key={index} />
                            ))}
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Chikmagaluru">
                        <div className='w-full flex flex-wrap gap-4 md:gap-7 justify-start'>
                            {[...Array(3)].map((_, index) => (
                                <PackageCard key={index} />
                            ))}
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Coorg">
                        <div className='w-full flex flex-wrap gap-4 md:gap-7 justify-start'>
                            {[...Array(2)].map((_, index) => (
                                <PackageCard key={index} />
                            ))}
                        </div>
                    </Tabs.Item>
                </Tabs>
                <Link to={"/properties"} className='mt-4 md:mt-0 ml-0 md:ml-4'>
                    <FontAwesomeIcon icon={faArrowRight} className='text-2xl cursor-pointer transform ease-in-out hover:translate-x-1 bg-orange-400 py-3 px-4 rounded-full' />
                </Link>
            </section>
        </div>
    )
}

export default FeaturedStay;
