import { useContext } from 'react';
import { FavouriteContext, LocationContext } from '../../contexts';

const FavouriteList = ({ onHide }) => {
    const { favouriteList } = useContext(FavouriteContext);

    const { handleSelectedLocation, resetSearch } = useContext(LocationContext);

    const handleLocation = (location) => {
        handleSelectedLocation(location);
        resetSearch();
        onHide();
    };

    let content = null;
    if (favouriteList.length === 0) {
        content = <p className="px-2">No favourite location found!</p>;
    }
    if (favouriteList.length > 0) {
        content = (
            <>
                <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
                <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                    {favouriteList.map((item, index) => (
                        <li
                            className="hover:bg-gray-200"
                            key={index}
                            onClick={() =>
                                handleLocation({
                                    latitude: item.latitude,
                                    longitude: item.longitude,
                                })
                            }
                        >
                            {item.location}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
    return (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-12 text-black shadow-lg ">
            {content}
        </div>
    );
};

export default FavouriteList;
