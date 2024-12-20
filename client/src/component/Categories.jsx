import React, { useState } from 'react'
import { shakIcon, chikaIcon, coorgIcon, wayIcon, ootyIcon, goaIcon } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Categories = () => {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const list = [
        {
            img: shakIcon,
            name: "Sakleshpur",
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
    // setSearchInput(value.name);
    // console.log(searchInput);
    // if (searchInput.trim()) {
    // }
    // https://holidayjoyvecation.onrender.com/api/v1/properties?keyword=banglore&limit=4
    const handleCategory = (value) => {
        navigate(`/properties?keyword=${value.name}`);
    }
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-full max-w-screen-xl p-4'>
                <h1 className='pt-6 pb-4 text-3xl md:text-4xl font-semibold tracking-wider text-center'>Popular Locations</h1>
                <section className='flex flex-wrap py-10 gap-5 justify-center items-center'>
                    {list.map((item, index) => (
                        <div key={index} onClick={() => handleCategory(item)} className='flex w-auto cursor-pointer  flex-row justify-between items-center bg-gray-200 py-2 px-2 rounded-full sm:w-auto md:w-auto lg:w-auto'>
                            <img src={item.img} alt={item.name} width={90} className='rounded-full px-4  sm:mb-0' />
                            <span className='flex flex-col justify-center  items-start'>
                                <p className=' text-lg font-medium'>{item.name}</p>
                                <p className=' text-sm text-gray-700'>{item.des}</p>
                            </span>
                            <FontAwesomeIcon icon={faArrowRight} onClick={() => handleCategory(item)} className=' text-xl sm:text-2xl cursor-pointer transform ease-in-out hover:translate-x-1 bg-orange-300 py-3 px-4 ml-0 sm:ml-8 rounded-full sm:mt-0' />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Categories;
