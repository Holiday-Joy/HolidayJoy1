import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PackagePack from '../component/HomeStays/PackagePack';
import Search from '../component/HomeStays/Search';

// Custom hook to get query parameters
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);
    const query = useQuery();
    const keyword = query.get('keyword') || "";

    useEffect(() => {
        const fetchProperties = async () => {
            const link = `https://holidayjoyvecation.onrender.com/properties?keyword=${keyword}`;
            try {
                await axios.get(link).then((response) => setProperties(response.data));
            } catch (e) {
                setError(e.message);
            }
        };
        fetchProperties();
    }, [keyword]);

    if (error) return <p>Error loading properties: {error}</p>;

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[80%] flex flex-col'>
                <div className='w-[25rem] justify-center items-center'>
                    <Search />
                </div>
                <h1 className='py-6'>Curated HomeStays in Shakleshpura</h1>
                <div className='w-full flex flex-col justify-between items-start gap-6'>
                    {properties.map((property) => (
                        // this component is to show case show case HomeStays in Packs
                        <PackagePack key={property._id} property={property} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Properties;
