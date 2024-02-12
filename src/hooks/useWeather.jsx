import { useEffect, useReducer } from 'react';
import { FETCH_DATA } from '../actions';
import fetchDataReducer, { intialState } from '../reducers/fetchDataReducer';

const useWeather = () => {
    const [weather, dispatch] = useReducer(fetchDataReducer, intialState);

    useEffect(() => {
        const getData = async (latitude, longitude) => {
            try {
                dispatch({
                    type: FETCH_DATA.LOADING,
                });
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
                        import.meta.env.VITE_API_KEY
                    }&units=metric`
                );

                if (response.ok) {
                    const data = await response.json();
                    const formatData = {
                        location: data?.name + ', ' + data?.sys.country,
                        climate: data?.weather[0]?.main,
                        climateIcon: data?.weather[0]?.icon,
                        temperature: data?.main?.temp,
                        maxTemperature: data?.main?.temp_max,
                        minTemperature: data?.main?.temp_min,
                        humidity: data?.main?.humidity,
                        cloudPercentage: data?.clouds?.all,
                        wind: data?.wind?.speed,
                        time: data?.dt,
                        timezone: data?.timezone,
                        sunrise: data?.sunrise,
                        sunset: data?.sunset,
                        longitude: longitude,
                        latitude: latitude,
                    };
                    dispatch({
                        type: FETCH_DATA.SUCCESS,
                        data: [formatData],
                    });
                }
            } catch (error) {
                dispatch({
                    type: FETCH_DATA.ERROR,
                    error: error.message,
                });
            }
        };
        navigator.geolocation.getCurrentPosition((position) => {
            getData(position.coords.latitude, position.coords.longitude);
        });
        getData();
    }, []);

    return weather;
};

export default useWeather;
