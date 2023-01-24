import React, {Component} from 'react';
import {getWeather} from "../actions";
import {connect} from "react-redux";
import {getCurrentDate} from "../../utils/getCurrentDate";
import CurrentDateCard from "../current-date-card";
import NextDateCard from "../next-date-card";
import {getCity} from "../../utils/getCity";
import MapContainer from "../mapp-container/MapContainer";
import {info} from "node-sass";

class WeatherDetails extends Component {
    componentDidMount() {
        getCity(this.props.getWeather)
    }

    render() {
        const {currentCityData} = this.props
        if (currentCityData) {
            const renderDate = (getCurrentDate(currentCityData[0].dt_txt, 'short', this.props.lang));
            const currentDetails = currentCityData[0]

            return (
                <div className="weather-details-container">
                    <div>
                        {/*<CurrentDateCard currentCity={this.props.currentCity} country={regionNames} renderDate={renderDate}*/}
                        {/*                 data={currentDetails}/> */}
                        <CurrentDateCard data={currentDetails} renderDate={renderDate}/>
                        <div className='next-weather-block'>
                            {
                                currentCityData.map((el, i) => {

                                    if (i > 0 && i < 4) {
                                        const {main: {temp}, dt_txt, weather: [{icon}]} = el
                                        const date = getCurrentDate(dt_txt, 'long', this.props.lang)
                                        return <NextDateCard key={i} date={date} temp={temp} icon={icon}/>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <MapContainer  coordinates={this.props.coord}/>

                        {/*<div>*/}
                        {/*<div className="map-info">Latitude: {this.props.coord[0]}</div>*/}
                        {/*<div className="map-info">Longitude: {this.props.coord[1]}</div>*/}
                        {/*</div>*/}

                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        getWeather: getWeather(dispatch),

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails);
