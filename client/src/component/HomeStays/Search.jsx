import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            navigate(`/properties?keyword=${searchInput}`);
        }
    };

    return (
        <div className=" rounded-3xl p-2 backdrop-blur-sm bg-black/10 border-2 sm:w-[25rem] md:w-[30rem] ">
            <div className="  rounded-xl flex ">
                <form onSubmit={handleSearch} className="flex w-full sm:flex-row items-center">
                    <input
                        className="py-3 px-4 sm:flex-1 sm:w-full rounded-3xl bg-gray-100 border-none outline-none sm:mb-0 sm:mr-4"
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search"
                    />
                    <button
                        type="submit"
                        className="py-3 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchForm;
