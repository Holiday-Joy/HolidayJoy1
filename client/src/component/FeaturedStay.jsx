import React from 'react'
import PackageCard from './PackageCard'
import { Tabs } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const FeaturedStay = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-[80%] '>
                <h1 className='pt-6 pb-4 text-[3rem] font-semibold tracking-wider'>Featured Stays</h1>
            </div>
            <section className=' w-[80%] flex justify-start items-center py-10'>
                <Tabs aria-label="Default tabs" variant="default" className=''>
                    <Tabs.Item active title="All" className=''>
                        <div className='w-full flex flex-wrap gap-7 justify-center'>
                            <Link to={'/properties'}>
                                <PackageCard />
                            </Link>
                            <Link to={'/properties'}>
                                <PackageCard />
                            </Link>
                            <Link to={'/properties'}>
                                <PackageCard />
                            </Link>
                            <Link to={'/properties'}>
                                <PackageCard />
                            </Link>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Shakleshpura">
                        <div className='w-full flex flex-wrap gap-7 justify-center'>
                            <PackageCard />
                            <PackageCard />
                            <PackageCard />
                            <PackageCard />
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Chikmagaluru">
                        <div className='w-full flex flex-wrap gap-7 justify-center'>
                            <PackageCard />
                            <PackageCard />
                            <PackageCard />
                            <PackageCard />
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Coorg">
                        <div className='w-full flex flex-wrap gap-7 justify-center'>
                            <PackageCard />
                            <PackageCard />
                            <PackageCard />
                            <PackageCard />
                        </div>
                    </Tabs.Item>
                </Tabs>
                <Link to={"/properties"}>
                    <div className=''>
                        <FontAwesomeIcon icon={faArrowRight} className='text-2xl cursor-pointer transform ease-in-out hover:translate-x-1 bg-orange-400 py-3 px-4 mt-20 -ml-6 rounded-full ' />
                    </div>
                </Link>
            </section>
        </div>
    )
}

export default FeaturedStay
