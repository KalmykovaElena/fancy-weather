import {FETCH_CITY_WEATHER, SET_CURRENT_TIME, SET_UNITS_OF_MEASUREMENT} from "../components/actions";

const initialState = {
    backgroundImage: '',
    lang: 'en',
    isCelsius:true,
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
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BACKGROUND_IMAGE':
            return {
                ...state,
                backgroundImage: `url(${action.payload})`
            }

        case FETCH_CITY_WEATHER:
            return {
                ...state,
                coord:action.payload.coord,
                currentCity: action.payload.city.name,
                currentCountry: action.payload.city.country,
                currentCityData: action.payload.list,
                lang:action.payload.lang
            }
        case SET_CURRENT_TIME:
            return {
                ...state,
                time: action.payload,
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
