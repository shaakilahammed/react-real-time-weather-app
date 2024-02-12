import { useContext } from 'react';
import { LocationContext } from '../../contexts';

const SearchSuggestion = () => {
    const {
        locationData: { loading, data, error },
        handleSelectedLocation,
        resetSearch,
    } = useContext(LocationContext);

    const handleLocation = (location) => {
        handleSelectedLocation({
            latitude: location.lat,
            longitude: location.lon,
        });
        resetSearch();
    };

    let content;
    if (loading) {
        content = (
            <li className="hover:bg-black/60 border-b border-white/50 last:border-b-0">
                Searching...
            </li>
        );
    }
    if (!loading && error) {
        content = (
            <li className="hover:bg-black/60 border-b border-white/50 last:border-b-0">
                {error}
            </li>
        );
    }
    if (!loading && !error && data.length === 0) {
        content = (
            <li className="hover:bg-black/60 border-b border-white/50 last:border-b-0">
                No location found!
            </li>
        );
    }
    if (!loading && !error && data.length > 0) {
        content = data.map((item, index) => (
            <li
                key={index}
                onClick={() => handleLocation(item)}
                className="hover:bg-black/60 border-b border-white/50 last:border-b-0"
            >
                {item?.name}, {item?.state}, {item?.country}
            </li>
        ));
    }

    return (
        <div className="w-full max-w-xs space-x-2 ml-0 bg-black/30 rounded-md border-gray-500 absolute top-10 text-white shadow-lg ">
            <ul className="space-y-2 *:py-1 *:px-4 *:cursor-pointer">
                {content}
            </ul>
        </div>
    );
};

export default SearchSuggestion;
