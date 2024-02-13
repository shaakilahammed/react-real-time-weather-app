import { useContext, useEffect, useState } from 'react';
import ClearSkyImage from '../assets/backgrounds/clear-sky.jpg';
import FewCloudsImage from '../assets/backgrounds/few-clouds.jpg';
import MistImage from '../assets/backgrounds/mist.jpeg';
import RainyDayImage from '../assets/backgrounds/rainy-day.jpg';
import ScatterdCloudsImage from '../assets/backgrounds/scattered-clouds.jpg';
import SnowImage from '../assets/backgrounds/sunny.jpg';
import ThunderStormImage from '../assets/backgrounds/thunderstorm.jpg';
import WinterImage from '../assets/backgrounds/winter.jpg';
import Header from '../components/header/Header';
import WeatherBoard from '../components/weather-board/WeatherBoard';
import { WeatherContext } from '../contexts';
const Home = () => {
    const [climateImage, setClimateImage] = useState('');
    const {
        weather: {
            data: [weatherData],
        },
    } = useContext(WeatherContext);
    function getBackgroundImage(clmte) {
        switch (clmte) {
            case 'Rain':
                return RainyDayImage;
            case 'Clouds':
                return ScatterdCloudsImage;
            case 'Clear':
                return ClearSkyImage;
            case 'Snow':
                return SnowImage;
            case 'Thunder':
                return ThunderStormImage;
            case 'Fog':
                return WinterImage;
            case 'Haze':
                return FewCloudsImage;
            case 'Mist':
                return MistImage;
            default:
                return ClearSkyImage;
        }
    }

    useEffect(() => {
        const bgImage = getBackgroundImage(weatherData?.climate);
        setClimateImage(bgImage);
    }, [weatherData?.climate]);
    return (
        <div
            style={{ backgroundImage: `url(${climateImage})` }}
            className={`bg-no-repeat bg-cover h-screen grid place-items-center`}
        >
            <Header />
            <main>
                <WeatherBoard />
            </main>
        </div>
    );
};

export default Home;
