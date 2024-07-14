import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        <div>
            <form
                onSubmit={handleSearch}
                className='mb-6 flex gap-2'>
                <input
                    type='text'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder='Search properties'
                    className='p-2 border rounded'
                />
                <button type='submit' className='p-2 bg-blue-500 text-white rounded'>
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search;
