import { useState } from 'react';
import heartImage from '../../assets/heart.svg';
import FavouriteList from './FavouriteList';
const ShowFavourites = () => {
    const [visible, setVisible] = useState(false);
    const handleVisible = () => {
        setVisible((prev) => !prev);
    };
    const handleHide = () => {
        setVisible(false);
    };
    return (
        <>
            <div
                onClick={handleVisible}
                className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
            >
                <img src={heartImage} alt="heart" />
                <span className="hidden lg:inline">Favourite Locations</span>
            </div>
            {visible && <FavouriteList onHide={handleHide} />}
        </>
    );
};

export default ShowFavourites;
