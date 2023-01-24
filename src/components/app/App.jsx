import React, {Component} from 'react';
import {connect} from "react-redux";
import WeatherContainer from "../weather-container/WeatherContainer";

class App extends Component {

    render() {
        return (
            <div className={'app'} style={{backgroundImage: this.props.background}}>
                <WeatherContainer/>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        background: state.backgroundImage,
    }

}

export default connect(mapStateToProps)(App);



