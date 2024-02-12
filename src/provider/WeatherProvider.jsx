import { WeatherContext } from '../contexts';
import useWeather from '../hooks/useWeather';

const WeatherProvider = ({ children }) => {
    const weather = useWeather();
    return (
        <WeatherContext.Provider value={{ weather }}>
            {children}
        </WeatherContext.Provider>
    );
};
export default WeatherProvider;
