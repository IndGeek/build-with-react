import React, { useState, useEffect } from 'react';

const DebounceExample = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [debouncedSearch, setDebouncedSearch] = useState('')

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            const str = searchTerm;
            setDebouncedSearch(str)
        }, 1000)

        return () => clearTimeout(timeout);
    }, [searchTerm])

    const searchUsers = async (term) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?q=${term}`);
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (debouncedSearch) {
        searchUsers(debouncedSearch);
        } else {
        setSearchResults([]);
        }
    }, [debouncedSearch]);

    return (
        <div className='flex justify-center items-center flex-col h-screen'>
        <span className="min-h-[400px]">
        <input
            type="text"
            className='px-3 py-2 rounded-md border-2 border-gray-300 focus:outline-none mb-4'
            placeholder="Search for users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            spellCheck="false"
        />
        <ul>
            {searchResults.map((user) => (
            <li className='pl-2' key={user.id}>{user.name}</li>
            ))}
        </ul>
        </span>
        </div>
    );
};

export default DebounceExample;
