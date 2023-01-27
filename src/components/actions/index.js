export const FETCH_BACKGROUND_IMAGE = 'FETCH_BACKGROUND_IMAGE'
export const FETCH_CITY_WEATHER = 'FETCH_CITY_WEATHER'
export const SET_CURRENT_TIME = 'SET_CURRENT_TIME'
export const SET_UNITS_OF_MEASUREMENT = 'SET_UNITS_OF_MEASUREMENT'

const linkLoaded = (link) => ({type: FETCH_BACKGROUND_IMAGE, payload: link.urls.regular})
const cityLoaded = (data) => ({type: FETCH_CITY_WEATHER, payload: data})
export const currentTime = (time) => ({type: SET_CURRENT_TIME, payload: time})
export const currentMeasurement = (data) => ({type: SET_UNITS_OF_MEASUREMENT, payload: data})

const APi_KEY = 'be37b681b59f77fe1aaf8f4ce71fa5ad'

export function getLinkToImage(dispatch) {
    return function () {
        const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(linkLoaded(data)));
    }
}

export function getWeather(dispatch) {

    return function (city) {
        const lang = localStorage.getItem('currentLanguage') || 'en'
        const units = localStorage.getItem('currentMeasurement') || 'metric'
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&units=${units}&APPID=${APi_KEY}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const cityData = {
                    city: data.city,
                    coord:Object.values(data.city.coord),
                    list: data.list.filter(item => item.dt_txt.includes('15:00:00')),
                    lang: lang
                }
                const currentDate = new Date(Date.now()).getDate()
                if (currentDate !== new Date(cityData.list[0].dt_txt).getDate()) {
                    cityData.list = [data.list[0], ...cityData.list]
                }
                dispatch(cityLoaded(cityData))
            })
            .catch((e) => console.log(e))
    }

}




