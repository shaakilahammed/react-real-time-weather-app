import { useContext } from 'react';
import { WeatherContext } from '../../contexts';
import Condition from './Condition';
import FavouriteButton from './FavouriteButton';
import Headline from './Headline';
import Loader from './Loader';

const WeatherBoard = () => {
    const {
        weather: { data, error, loading },
    } = useContext(WeatherContext);

    let content = null;
    if (loading) {
        content = <Loader />;
    }
    if (!loading && error) {
        content = <p>{error}</p>;
    }
    if (!loading && !error && data[0]) {
        content = (
            <section className="">
                <div className="container">
                    <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
                        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                            <FavouriteButton />
                            <Headline />
                            <Condition />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return content;
};

export default WeatherBoard;
