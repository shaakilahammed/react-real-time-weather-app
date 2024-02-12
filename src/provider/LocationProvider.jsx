import { useState } from 'react';
import { LocationContext } from '../contexts';
import useDebounce from '../hooks/useDebounce';
import useLocation from '../hooks/useLocation';

const LocationProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const debounceText = useDebounce(search, 500);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const locationData = useLocation(debounceText);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const resetSearch = () => {
        setSearch('');
    };
    const handleSelectedLocation = (location) => {
        setSelectedLocation(location);
    };

    return (
        <LocationContext.Provider
            value={{
                locationData,
                handleSearch,
                resetSearch,
                searchText: search,
                selectedLocation,
                handleSelectedLocation,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
export default LocationProvider;
