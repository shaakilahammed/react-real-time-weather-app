import heartImage from '../../assets/heart.svg';
import FavouriteList from './FavouriteList';
const ShowFavourites = () => {
    return (
        <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={heartImage} alt="heart" />
            <span className="hidden lg:inline">Favourite Locations</span>
            <FavouriteList />
        </div>
    );
};

export default ShowFavourites;
