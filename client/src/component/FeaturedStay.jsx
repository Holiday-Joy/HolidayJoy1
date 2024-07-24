import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PackageCard from './PackageCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FeaturedStay = () => {
    const [properties, setProperties] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const link = `https://holidayjoyvecation.onrender.com/api/v1/featuredstay?keyword=${keyword}&limit=4`;
                const response = await axios.get(link);
                setProperties(response.data);
            } catch (e) {
                setError(e.message);
            }
        };

        fetchProperties();

    }, [keyword]); // Update properties when keyword changes
    console.log(properties);
    const handleKeywordSearch = (searchKeyword) => {
        setKeyword(searchKeyword);
    };

    return (
        <div className='w-full flex flex-col justify-center items-center py-24'>
            <div className='w-full md:w-[80%]'>
                <h1 className='pt-6 pb-4 text-3xl md:text-4xl font-semibold tracking-wider text-center'>Featured Stay</h1>
            </div>
            <section className='w-full md:w-[80%] flex flex-col md:flex-row justify-start items-center py-10'>
                <div className=' w-auto h-auto flex flex-col gap-4'>
                    <div className='flex flex-wrap gap-2 justify-center items-center md:justify-start'>
                        <button
                            className={`py-3 px-6 ${keyword == "" ? "bg-orange-300" : "border-gray-200"} border-2 rounded-lg`}
                            onClick={() => handleKeywordSearch('')}
                        >
                            All
                        </button>
                        <button
                            className={`py-3 px-6 ${keyword == "sakleshpura" ? "bg-orange-300" : "border-gray-200"} border-2 rounded-lg`}
                            onClick={() => handleKeywordSearch('sakleshpura')}
                        >
                            Sakleshpura
                        </button>
                        <button
                            className={`py-3 px-6 ${keyword == "coorg" ? "bg-orange-300" : "border-gray-200"} border-2 rounded-lg`}
                            onClick={() => handleKeywordSearch('coorg')}
                        >
                            Coorg
                        </button>
                        <button
                            className={`py-3 px-6 ${keyword == "chikkamagaluru" ? "bg-orange-300" : "border-gray-200"} border-2 rounded-lg`}
                            onClick={() => handleKeywordSearch('chikkamagaluru')}
                        >
                            Chikkamagaluru
                        </button>
                    </div>
                    <section className='flex-col md:flex md:flex-row justify-end items-center'>
                        <div className='flex w-full flex-wrap   '>
                            {error && <p className="text-red-500">Error: {error}</p>}
                            <div className='w-full flex gap-4 flex-wrap justify-center items-center md:justify-start'>
                                {
                                    properties.map((property, index) => (
                                        <div key={index}>
                                            <PackageCard property={property} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='mt-4 md:mt-0 ml-0 md:ml-4 flex justify-center items-center'>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className='text-2xl cursor-pointer transform ease-in-out hover:translate-x-1 bg-orange-400 py-3 px-4 rounded-full'
                            />
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default FeaturedStay;
