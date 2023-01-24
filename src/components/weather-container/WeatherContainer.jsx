import React, {Component} from 'react';
import Header from "../header/Header";
import WeatherDetails from "../weather-details/WeatherDetails";


class WeatherContainer extends Component {

    render() {
        return (
            <div className={'app-wrapper'}>
                <Header/>
                <WeatherDetails/>
            </div>
        );
    }
}

export default WeatherContainer;
