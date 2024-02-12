import { useContext, useEffect, useReducer } from 'react';
import { FETCH_DATA } from '../actions';
import { LocationContext } from '../contexts';
import fetchDataReducer, { intialState } from '../reducers/fetchDataReducer';

const useWeather = () => {
    const [weather, dispatch] = useReducer(fetchDataReducer, intialState);
    const { selectedLocation } = useContext(LocationContext);

    useEffect(() => {
        dispatch({
            type: FETCH_DATA.LOADING,
        });
        const getData = async (lat, long) => {
            try {
                const response = await fetch(
                    `${
                        import.meta.env.VITE_API_URL
                    }/data/2.5/weather?lat=${lat}&lon=${long}&appid=${
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
                        longitude: long,
                        latitude: lat,
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
        if (selectedLocation?.latitude && selectedLocation?.longitude) {
            getData(selectedLocation?.latitude, selectedLocation?.longitude);
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                getData(position.coords.latitude, position.coords.longitude);
            });
        }
    }, [selectedLocation?.latitude, selectedLocation?.longitude]);

    return weather;
};

export default useWeather;
