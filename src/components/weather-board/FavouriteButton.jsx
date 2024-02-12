import { useContext } from 'react';
import redHeartImage from '../../assets/heart-red.svg';
import heartImage from '../../assets/heart.svg';
import { FavouriteContext, WeatherContext } from '../../contexts';
const FavouriteButton = () => {
    const {
        weather: {
            data: [{ location, latitude, longitude }],
        },
    } = useContext(WeatherContext);
    const { updateFavouriteList, isFavourite } = useContext(FavouriteContext);
    const handleFavourite = (location, latitude, longitude) => {
        updateFavouriteList({ location, latitude, longitude });
    };
    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    onClick={() =>
                        handleFavourite(location, latitude, longitude)
                    }
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
                >
                    <span>Add to Favourite</span>
                    {isFavourite(location) ? (
                        <img src={redHeartImage} alt="Red Heart" />
                    ) : (
                        <img src={heartImage} alt="Heart" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default FavouriteButton;
