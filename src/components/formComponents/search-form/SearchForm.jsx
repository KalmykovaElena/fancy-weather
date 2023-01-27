import React, {Component} from 'react';
import {getWeather} from "../../actions";
import {connect} from "react-redux";

class SearchForm extends Component {
    render() {
        const {data, lang, getWeather, isCelsius} = this.props
        return (
            <form onSubmit={(event) => {
                event.preventDefault()
                const city = event.target.elements.city.value
                getWeather(city, lang, isCelsius ? 'metric' : 'imperial')
            }}>
                <input type="text" name='city' placeholder={data[lang].placeholder}/>
                <button>{data[lang].button}</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        data: state.apiData,
        isCelsius: state.isCelsius
    }
}
const mapDispatchToProps = (dispatch, city) => {
    return {
        getWeather: getWeather(dispatch, city)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
