import React, {Component} from 'react';
import CurrentTime from "../currentTime/CurrentTime";
import {connect} from "react-redux";

class CurrentDateCard extends Component {
    render() {
        const {currentCity,renderDate,apiData,lang}=this.props
       const {main:{temp,feels_like,humidity},wind:{speed:wind},weather:[{description,icon}]}=this.props.data
        const country = (new Intl.DisplayNames([this.props.lang], {type: 'region'}).of(this.props.currentCountry))
        return (
            <div className='current-weather'>
                <h1 className="current-weather-city">{currentCity},{country}</h1>
                <div className="current-weather-date">{renderDate}
                <CurrentTime/>
                </div>
                <div className="current-weather__details">

                    <div className="current-weather__details-temp">{Math.round(temp)}<span>°</span></div>
                    <div className="weather-img">
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
                    </div>

                    <ul className="current-weather__details-description">
                        <li>{description}</li>
                        <li>{apiData[lang].feels}: {Math.round(feels_like)} °</li>
                        <li>{apiData[lang].wind}: {Math.round(wind)} {apiData[lang].unit}</li>
                        <li>{apiData[lang].humidity}: {humidity}%</li>
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
export default connect(mapStateToProps) (CurrentDateCard);
