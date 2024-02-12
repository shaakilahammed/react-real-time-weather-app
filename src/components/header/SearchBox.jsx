import { useState } from 'react';
import searchImage from '../../assets/search.svg';
import useLocation from '../../hooks/useLocation';
import SearchSuggestion from './SearchSuggestion';
const SearchBox = () => {
    const [search, setSearch] = useState('');
    const locationData = useLocation(search);
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Location"
                    onChange={handleSearch}
                    value={search}
                    required
                />
                <button type="submit">
                    <img src={searchImage} />
                </button>
            </div>
            {search && <SearchSuggestion locationData={locationData} />}
        </form>
    );
};

export default SearchBox;
