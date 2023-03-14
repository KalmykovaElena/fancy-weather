import React, {Component} from 'react';
import {connect} from "react-redux";
import WeatherContainer from "../weather-container/WeatherContainer";
import {getLinkToImage} from "../actions";

class App extends Component {
    componentDidMount() {
        this.props.bgImg()
    }
    render() {
        return (
            <div className={'app'} style={{backgroundImage: this.props.background}}>
                <WeatherContainer/>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        background: state.backgroundImage,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        bgImg:getLinkToImage(dispatch)
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(App);



