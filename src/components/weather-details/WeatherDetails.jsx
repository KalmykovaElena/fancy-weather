import React, {Component} from 'react';
import {getLinkToImage, getWeather} from "../actions";
import {connect} from "react-redux";
import {getCurrentDate} from "../../utils/getCurrentDate";
import CurrentDateCard from "../current-date-card";
import {getCity} from "../../utils/getCity";
import MapContainer from "../mapp-container/MapContainer";
import NextDateContainer from "../next-date-container";

class WeatherDetails extends Component {
    componentDidMount() {
        getCity(this.props.getWeather)
    }

    render() {
        const {currentCityData,lang,coord} = this.props
        if (currentCityData) {
            const renderDate = (getCurrentDate(currentCityData[0].dt_txt, 'short', lang));
            const currentDetails = currentCityData[0]

            return (
                <div className="weather-details-container">
                    <div>
                        <CurrentDateCard data={currentDetails} renderDate={renderDate}/>
                        <NextDateContainer data={currentCityData}/>
                    </div>
                    <MapContainer coordinates={coord}/>
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

