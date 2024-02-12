import { useEffect, useReducer } from 'react';
import { FETCH_DATA } from '../actions';
import fetchDataReducer, { intialState } from '../reducers/fetchDataReducer';

const useLocation = (query) => {
    const [locations, dispatch] = useReducer(fetchDataReducer, intialState);
    useEffect(() => {
        const getData = async () => {
            try {
                dispatch({
                    type: FETCH_DATA.LOADING,
                });
                const response = await fetch(
                    `${
                        import.meta.env.VITE_API_URL
                    }/geo/1.0/direct?q=${query}&limit=5&appid=${
                        import.meta.env.VITE_API_KEY
                    }`
                );
                if (response.ok) {
                    const data = await response.json();
                    dispatch({
                        type: FETCH_DATA.SUCCESS,
                        data: data,
                    });
                }
            } catch (error) {
                dispatch({
                    type: FETCH_DATA.ERROR,
                    error: error.message,
                });
            }
        };
        query && getData();
    }, [query]);

    return locations;
};

export default useLocation;
