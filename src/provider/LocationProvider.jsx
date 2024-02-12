import { useState } from 'react';
import { LocationContext } from '../contexts';
import useLocation from '../hooks/useLocation';

const LocationProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const locationData = useLocation(search);

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
