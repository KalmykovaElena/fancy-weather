


export const SET_HAS_ERROR = "SET_HAS_ERROR";
export const FETCH_BACKGROUND_IMAGE = 'FETCH_BACKGROUND_IMAGE'
export const FETCH_CITY_WEATHER = 'FETCH_CITY_WEATHER'
export const SET_UNITS_OF_MEASUREMENT = 'SET_UNITS_OF_MEASUREMENT'
export const SET_LANGUAGE = "SET_LANGUAGE";

const linkLoaded = (link) => ({type: FETCH_BACKGROUND_IMAGE, payload: link.urls.regular})
const cityLoaded = (data) => ({type: FETCH_CITY_WEATHER, payload: data})
export const currentMeasurement = (data) => ({type: SET_UNITS_OF_MEASUREMENT, payload: data})
export const setHasError = (err) => ({type: SET_HAS_ERROR, payload: err});
export const setLanguage = (lang) => ({type: SET_LANGUAGE, payload: lang});

const APi_KEY = 'be37b681b59f77fe1aaf8f4ce71fa5ad'

export function getLinkToImage(dispatch) {
    return function () {
        const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';

        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }

            })
            .then(data => dispatch(linkLoaded(data)));
    }
}

export function getWeather(dispatch) {

    return function (city,lang='en',units='metric') {
        if (city) {
            dispatch(setHasError(false))
        }
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&units=${units}&APPID=${APi_KEY}`;

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    dispatch(setHasError('errorCity'))
                    throw new Error('city not found')
                }
                return res.json()
            })
            .then(data => {
                const cityData = {
                    city: data.city,
                    coord: Object.values(data.city.coord),
                    list: data.list.filter(item => item.dt_txt.includes('15:00:00')),
                    lang: lang
                }
                const currentDate = new Date(Date.now()).getDate()
                if (currentDate !== new Date(cityData.list[0].dt_txt).getDate()) {
                    cityData.list = [data.list[0], ...cityData.list]
                }
                dispatch(cityLoaded(cityData))
            })
            .catch((e) => {
                console.log(e)
            })
    }

}


