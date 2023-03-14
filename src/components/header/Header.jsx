import React, {Component} from 'react';
import Button from "../formComponents/button";
import { currentMeasurement, getLinkToImage, getWeather, setLanguage} from "../actions";
import {connect} from "react-redux";
import './_header.scss'
import SearchForm from "../formComponents/search-form";

class Header extends Component {
    render() {
        const {city, lang, isCelsius, changeLanguage, hasError, getWeather, setMeasurement} = this.props
        return (
            <div className={'app-header'}>
                <div className={'app-header-buttons'}>
                    <Button class={'updateImage'} onClick={() => this.props.getLinkToImage()}/>
                    <select value={lang}
                            onChange={(event) => {
                                changeLanguage(event.target.value)
                                if (!hasError) {
                                    getWeather(city, event.target.value)
                                }
                            }} name={'lang'}>
                        <option value={'en'}>EN</option>
                        <option value={'ru'}>RU</option>
                    </select>
                    <div className={'change-temp'}>
                        <button className={isCelsius ? '' : 'active'} onClick={() => {
                            setMeasurement(false)
                            getWeather(city, lang, 'imperial')
                        }}>{'F°'}</button>
                        <button className={isCelsius ? 'active' : ''} onClick={() => {
                            setMeasurement(true)
                            getWeather(city, lang)
                        }}>{'C°'}</button>
                    </div>
                </div>
                <SearchForm/>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        city: state.currentCity,
        isCelsius: state.isCelsius,
        hasError: state.hasError,
        lang: state.lang
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLinkToImage: getLinkToImage(dispatch),
        getWeather: getWeather(dispatch),
        setMeasurement: (data) => dispatch(currentMeasurement(data)),
        changeLanguage: (lang) => dispatch(setLanguage(lang))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);


