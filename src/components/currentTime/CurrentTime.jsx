import React, {Component} from 'react';
import {currentTime} from "../actions";
import {connect} from "react-redux";


class CurrentTime extends Component {
    componentDidMount() {
        this.timeId = setInterval(() => this.props.setTime(new Date().toLocaleTimeString()), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    render() {
        return (
            <span className={'current-time'}>
          {this.props.time}
            </span>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        time: state.time
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        setTime:(time)=>dispatch(currentTime( time))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CurrentTime);
