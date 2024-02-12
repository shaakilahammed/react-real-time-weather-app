import bgImage from '../assets/body-bg.png';
import Header from '../components/header/Header';
import WeatherBoard from '../components/weather-board/WeatherBoard';
const Home = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bgImage})` }}
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
