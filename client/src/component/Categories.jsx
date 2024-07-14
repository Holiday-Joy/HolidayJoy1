import React from 'react'
import { shakIcon, chikaIcon, coorgIcon, wayIcon, ootyIcon, goaIcon } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Categories = () => {
    const list = [
        {
            img: shakIcon,
            name: "Sakleshpura",
            des: "10 resorts, 15 Homestays"
        },
        {
            img: chikaIcon,
            name: "Chickmagalore",
            des: "8 resorts, 15 Homestays"
        },
        {
            img: coorgIcon,
            name: "Coorg",
            des: "10 resorts, 12 Homestays"
        },
        {
            img: wayIcon,
            name: "Wayanad, Kerala",
            des: "10 resorts, 15 Homestays"
        },
        {
            img: ootyIcon,
            name: "Ooty",
            des: "8 resorts, 16 Homestays"
        },
        {
            img: goaIcon,
            name: "Goa",
            des: "11 resorts, 8 Homestays"
        },
    ]
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[80%] '>
                <h1 className='pt-6 pb-4 text-[3rem] font-semibold tracking-wider'>Popular Locations</h1>
                <section className='flex flex-wrap py-10 gap-5 justify-center items-center'>
                    {list.map((item, index) => (
                        <Link to={'/properties'}>
                            <div key={index} className='flex justify-center items-center bg-gray-200 py-2 px-1 rounded-full w-full sm:w-full md:w-auto lg:w-auto  '>
                                <img src={item.img} alt="shakleshpura" width={90} className='rounded-full px-4' />
                                <span className='flex-col justify-center items-center'>
                                    <p>{item.name}</p>
                                    <p className='text-sm text-gray-700'>{item.des}</p>
                                </span>
                                <FontAwesomeIcon icon={faArrowRight} className='text-2xl cursor-pointer transform ease-in-out hover:-translate-y-1 bg-orange-400 py-3 px-4 ml-8 rounded-full' />
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Categories;