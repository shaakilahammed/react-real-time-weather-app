import { useState } from 'react';
import { FavouriteContext } from '../contexts';

const FavouriteListProvider = ({ children }) => {
    const [favouriteList, setFavouriteList] = useState([]);

    const isFavourite = (location) => {
        return favouriteList.some((item) => item.location === location);
    };

    const updateFavouriteList = ({ location, latitude, longitude }) => {
        const isExist = favouriteList.find(
            (item) => item.location === location
        );
        let nextFavouriteList;
        if (isExist) {
            nextFavouriteList = favouriteList.filter(
                (item) => location !== item.location
            );
        } else {
            nextFavouriteList = [
                ...favouriteList,
                { location, latitude, longitude },
            ];
        }
        setFavouriteList(nextFavouriteList);
    };

    return (
        <FavouriteContext.Provider
            value={{ favouriteList, updateFavouriteList, isFavourite }}
        >
            {children}
        </FavouriteContext.Provider>
    );
};

export default FavouriteListProvider;
