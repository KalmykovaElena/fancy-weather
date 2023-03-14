import {
    SET_HAS_ERROR,
    FETCH_CITY_WEATHER,
    SET_LANGUAGE,
    SET_UNITS_OF_MEASUREMENT
} from "../components/actions";

const initialState = {
    backgroundImage: 'url(/img/bg-3.jpg)',
    lang: 'en',
    isCelsius:true,
    hasError: false,
    apiData:{
        en: {
            placeholder: 'search city',
            button: 'SEARCH',
            feels: 'FEELS LIKE',
            wind: 'WIND',
            humidity: 'HUMIDITY',
            unit:'m/s'
        },
        ru:{
            placeholder:'искать город',
            button:'ИСКАТЬ',
            feels: 'ОЩУЩАЕТСЯ КАК',
            wind: 'ВЕТЕР',
            humidity: 'ВЛАЖНОСТЬ',
            unit:'м/с'
        }
    },
    errorInfo:{
        en:{
            title:'ERROR!!!',
            errorCity:'city not found'
        },
        ru:{
            title:'ОШИБКА!!!',
            errorCity:'город не найден'
        }
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BACKGROUND_IMAGE':
            return {
                ...state,
                backgroundImage: `url(${action.payload})`
            }
        case SET_HAS_ERROR:
            return {
                ...state,
                hasError: action.payload,
            };
        case FETCH_CITY_WEATHER:
            return {
                ...state,
                coord:action.payload.coord,
                currentCity: action.payload.city.name,
                currentCountry: action.payload.city.country,
                currentCityData: action.payload.list,
                lang:action.payload.lang
            }
            case SET_LANGUAGE:
            return {
                ...state,
                lang: action.payload,
            }
            case SET_UNITS_OF_MEASUREMENT:
            return {
                ...state,
                isCelsius: action.payload,
            }
        default:
            return state
    }
}
