import { useContext } from 'react';
import cloudImage from '../../assets/icons/cloud.svg';
import humadityImage from '../../assets/icons/humidity.svg';
import tempMaxImage from '../../assets/icons/temp-max.svg';
import tempMinImage from '../../assets/icons/temp-min.svg';
import windImage from '../../assets/icons/wind.svg';
import { WeatherContext } from '../../contexts';
const Condition = () => {
    const {
        weather: {
            data: [
                {
                    maxTemperature,
                    minTemperature,
                    humidity,
                    cloudPercentage,
                    wind,
                    climate,
                },
            ],
        },
    } = useContext(WeatherContext);
    console.log({
        maxTemperature,
        minTemperature,
        humidity,
        cloudPercentage,
        wind,
        climate,
    });
    return (
        <div>
            <p className="text-sm lg:text-lg font-bold uppercase mb-8">
                The climate is {climate}
            </p>
            <ul className="space-y-6 lg:space-y-6">
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>{Math.round(maxTemperature)}°</p>
                        <img src={tempMaxImage} alt="temp-max" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>{Math.round(minTemperature)}°</p>
                        <img src={tempMinImage} alt="temp-min" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Humadity</span>
                    <div className="inline-flex space-x-4">
                        <p>{humidity}%</p>
                        <img src={humadityImage} alt="humidity" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>{cloudPercentage}%</p>
                        <img src={cloudImage} alt="cloudy" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>{wind}km/h</p>
                        <img src={windImage} alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Condition;
