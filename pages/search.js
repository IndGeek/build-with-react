import {useState, useEffect, useRef} from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState(""); // 1
    const [searchAreaVisible, setSearchAreaVisibility] = useState(false); // 2
    const [responses, setResponses] = useState([]) // 4
    const inputRef = useRef(null)
    const suggestionBoxRef = useRef(null);
    const suggestions = [
        'Nissan GT-R',
        'Nissan Altima',
        'Nissan Maxima',
        'Nissan Sentra',
        'Nissan Rogue',
        'Ford Mustang',
        'Ford F-150',
        'Ford Focus',
        'Ford Escape',
        'Ford Fusion',
        'Toyota Camry',
        'Toyota Corolla',
        'Toyota Prius',
        'Toyota RAV4',
        'Toyota Tacoma',
        'Honda Civic',
        'Honda Accord',
        'Chevrolet Malibu',
        'Chevrolet Camaro',
        'Chevrolet Corvette',
        'BMW 3 Series',
        'BMW 5 Series',
        'BMW X3',
        'BMW X5',
        'BMW Z4',
        'Mercedes-Benz C-Class',
        'Mercedes-Benz E-Class',
        'Mercedes-Benz GLC',
        'Mercedes-Benz GLE',
        'Mercedes-Benz S-Class',
        'Audi A3',
        'Audi A4',
        'Audi Q5',
        'Audi Q7',
        'Audi TT',
        'Audi R8',
        'Hyundai Tucson',
    ];

    const handleSearch = (e) =>{ // 3
        const value = e.target.value;
        setSearchTerm(value);

        const filteredSuggestions = suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(value.toLowerCase())
        );
        setResponses(value === '' || filteredSuggestions.length === 0 ? ['No results'] : filteredSuggestions.slice(0, 10));
        setSearchAreaVisibility(filteredSuggestions.length > 0 || searchTerm.length > 0);
    }

    useEffect(()=>{
        window.addEventListener("click", e=>{
            if(e.target !== inputRef.current && e.target !== suggestionBoxRef.current){
                setSearchAreaVisibility(false)
            }
        })
        return ()=> window.removeEventListener('click', ()=>{})
    }, [])

    const highlightMatch = (suggestion, searchTerm) => {
        const regex = new RegExp(`(${searchTerm})`, 'i');
        const parts = suggestion.split(regex);
        return parts.map((part, index) =>
            regex.test(part) ? <span key={index} className="font-bold">{part}</span> : part
        );
    };
    return (
        <>
        <main className='flex justify-center items-center h-screen flex-col'>
        <div className='search-box fixed top-[300px]'>
            <input type="text" 
                placeholder="Search here" id="auto_search_suggestion" 
                value={searchTerm} ref={inputRef}
                className='border-2 border-black px-5 py-2 w-[350px]'
                onFocus={() => setSearchAreaVisibility(true)}
                onChange={handleSearch}
                autoFocus={true}
                spellCheck={false}
                />
            
            {(searchAreaVisible && searchTerm) && <div className='p-2 border-2 border-t-0 border-black w-[350px]' id="suggestion-box">
                {responses.map((response) =>{
                    return <div className='border-b py-1 px-2 m-1' ref={suggestionBoxRef}
                                onClick={()=>setSearchTerm(response)}
                            >
                                {highlightMatch(response, searchTerm)} 
                                {/* first write response */}
                            </div>
                })}
                
                </div>}
            </div>
        </main>
        </>
    )
}

export default Search