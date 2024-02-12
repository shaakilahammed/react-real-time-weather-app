import { FETCH_DATA } from '../actions';
export const intialState = {
    data: [],
    loading: false,
    error: null,
};
const fetchDataReducer = (state, action) => {
    switch (action.type) {
        case FETCH_DATA.LOADING: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case FETCH_DATA.SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false,
                error: null,
            };
        }
        case FETCH_DATA.ERROR: {
            return {
                ...state,
                data: [],
                loading: false,
                error: action.error,
            };
        }
    }
};

export default fetchDataReducer;
