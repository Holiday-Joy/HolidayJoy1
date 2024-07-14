import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
const Search = () => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            navigate(`/properties?keyword=${searchInput}`);
        }
    };
    return (
        <div className=' min-w-[25rem] bg-gray-100 rounded-3xl '>
            <div className='w-full rounded-xl'>
                <form
                    onSubmit={handleSearch}
                    className='mb-6 flex'>
                    <input
                        className='py-4 pl-6 w-full rounded-3xl bg-gray-100 border-none outline-none'
                        type='text'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder='Search'

                    />
                    <button type='submit' className='py-4 px-5 text-black rounded-full'>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Search;
