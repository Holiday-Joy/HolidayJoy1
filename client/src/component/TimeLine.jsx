import React from 'react'
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { shakleshpura, blog1, blog2, blog3 } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
const TimeLine = () => {
    return (
        <div className=' w-full flex flex-col justify-center items-center my-10 py-10'>
            <Timeline className='w-[80%]' >
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>March 2022</Timeline.Time>
                        <div className=' lg:flex  gap-5'>
                            <div className='w-auto lg:w-auto h-auto fancyBorder overflow-hidden'>
                                <img src={blog1} alt="shakaleshpura" className='' />
                            </div>
                            <div>
                                <Timeline.Title>Discover Ooty: The Queen of Hill Stations</Timeline.Title>
                                <Timeline.Body>
                                    <h4>
                                        Ooty, also known as Udagamandalam, is a charming hill station nestled amidst the Nilgiri Hills in Tamil Nadu. This picturesque retreat offers a captivating blend of colonial architecture, verdant landscapes, and refreshing weather, making it a popular getaway destination.
                                    </h4>
                                    <div className='mt-4'>
                                        <p>Nestled amidst the lush greenery of Tamil Nadu , Ooty beckons travelers with its enchanting landscapes, rich culture, Nestled amidst the lush greenery of Tamil Nadu , Ooty beckons travelers with its enchanting landscapes landscapes w landscapes landscapes...</p>
                                    </div>
                                    <Button className='mt-2 flex justify-center items-center bg-white text-black border-orange-400  *:focus:ring-0  *:hover:bg-white'>
                                        Learn More
                                        <HiArrowNarrowRight className="ml-2 mt-1.5 h-3 w-3" />
                                    </Button>
                                </Timeline.Body>
                            </div>
                        </div>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item className='bg-slate-300 p-5 rounded-3xl'>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>March 2022</Timeline.Time>
                        <div className='lg:flex gap-5'>
                            <div>
                                <Timeline.Title>Experience Chikmagalur: From Lush Coffee Plantations to Majestic Peaks</Timeline.Title>
                                <Timeline.Body>
                                    <h1 className='py-2'> <b>
                                        Places to Breathe in Beauty:
                                    </b>
                                    </h1>
                                    <ul>
                                        <li><b>Mullayanagiri:</b> As the highest peak in Karnataka, Mullayanagiri offers panoramic vistas that leave you awestruck. Hike to the temple perched atop the peak and witness the sunrise paint the landscape in a kaleidoscope of colors.</li>
                                        <li><b>Hebbe Falls:</b> Cascading down a rocky outcrop, Hebbe Falls is a haven for those seeking a refreshing escape. Take a dip in the pool at the falls' base or simply soak in the beauty of the surrounding rainforests.</li>
                                    </ul>

                                    <Button className='mt-2 flex justify-center items-center bg-white text-black border-orange-400  *:focus:ring-0  *:hover:bg-white'>
                                        Learn More
                                        <HiArrowNarrowRight className="ml-2 mt-1.5 h-3 w-3" />
                                    </Button>
                                </Timeline.Body>
                            </div>
                            <div className='fancyBorder1 overflow-hidden bg-contain'>
                                <img src={blog2} alt="shakaleshpura" width={900} />
                            </div>
                        </div>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>April 2022</Timeline.Time>
                        <div className=' lg:flex gap-5'>
                            <div className='fancyBorder2 overflow-hidden'>
                                <img src={blog3} alt="shakaleshpura" width={900} />
                            </div>
                            <div>
                                <Timeline.Title>Royal Grandeur of Bangalore Palace: A Step Back in Time</Timeline.Title>
                                <Timeline.Body>
                                    <h4>
                                        Nestled in the heart of the bustling city, Bangalore Palace stands as a testament to the regal opulence and architectural grandeur of a bygone era.                                    </h4>
                                    <ul>
                                        <li> <b>Doddabetta Peak:</b> As the highest point in the Nilgiris, Doddabetta Peak boasts breathtaking panoramic views. Take in the vast expanse of rolling hills and lush valleys, or enjoy a cup of steaming tea at the peak's restaurant.</li>
                                        <li><b>Ooty Lake:</b> The heart of Ooty, Ooty Lake is a scenic haven for boating enthusiasts. Paddle through the tranquil waters, or simply relax on the surrounding banks and soak in the serenity.</li>
                                    </ul>
                                    <Button className='mt-2 flex justify-center items-center bg-white text-black border-orange-400  *:focus:ring-0  *:hover:bg-white'>
                                        Learn More
                                        <HiArrowNarrowRight className="ml-2 mt-1.5 h-3 w-3" />
                                    </Button>
                                </Timeline.Body>
                            </div>
                        </div>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
            <div>
                <a href="">
                    <h1 className='text-lg'>Read more <FontAwesomeIcon icon={faCaretRight} /> </h1>
                </a>
            </div>
        </div>
    )
}

export default TimeLine
