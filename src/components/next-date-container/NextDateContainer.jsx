import React, {Component} from 'react';
import {getCurrentDate} from "../../utils/getCurrentDate";
import NextDateCard from "../next-date-card";

class NextDateContainer extends Component {
    render() {
        return (
            <div className='next-weather-block'>{
                this.props.data.map((el, i) => {

                    if (i > 0 && i < 4) {
                        const {main: {temp}, dt_txt, weather: [{icon}]} = el
                        const date = getCurrentDate(dt_txt, 'long', this.props.lang)
                        return <NextDateCard key={i} date={date} temp={temp} icon={icon}/>
                    }
                })}
            </div>
        );
    }
}

export default NextDateContainer;
