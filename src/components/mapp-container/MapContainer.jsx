import React, {Component} from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {ConvertCoordinates} from "../../utils/convertCoordinates";

class MapContainer extends Component {
    render() {
        return (
<div className={'map-container'}>
    <div className={'map-container-img'}>
            <YMaps>

                <Map state={{
                    center:this.props.coordinates,
                    zoom: 5,
                }} width={'375px'}height={'375px'} >
                    <Placemark geometry={this.props.coordinates}/>
                </Map>

            </YMaps>
    </div>
    <div className="map-info">Latitude: {ConvertCoordinates(this.props.coordinates[0])}</div>
    <div className="map-info">Longitude: {ConvertCoordinates(this.props.coordinates[1])}</div>
</div>
        );
    }
};

export default MapContainer;
