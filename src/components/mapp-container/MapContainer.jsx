import React, {Component} from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

class MapContainer extends Component {
    render() {
        return (

            <YMaps>

                <Map state={{
                    center:this.props.coordinates,
                    zoom: 5,
                }} width={'375px'}height={'375px'} >
                    <Placemark geometry={this.props.coordinates}/>
                </Map>

            </YMaps>

        );
    }
};

export default MapContainer;
