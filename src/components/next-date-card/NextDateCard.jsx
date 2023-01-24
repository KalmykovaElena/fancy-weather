import React, {Component} from 'react';

class NextDateCard extends Component {

    render() {
        const {date,temp,icon}=this.props
        return (
            <div className='next-weather'>
                <div className="next-weather-date">{date}</div>
                <div className="next-weather-description">
                    <div className="next-weather-temp">{Math.round(temp)}°</div>
                <div className="weather-img">
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
                </div>
                </div>
            </div>
        );
    }
}

export default NextDateCard;
