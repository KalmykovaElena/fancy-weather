import React, {Component} from 'react';

class CurrentTime extends Component {
    state = {
        time: ''
    }
    componentDidMount() {
        this.timeId = setInterval(() => this.setState({time:new Date().toLocaleTimeString()}), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    render() {
        return (
            <span className={'current-time'}>
          {this.state.time}
            </span>
        );
    }
}

export default CurrentTime;
