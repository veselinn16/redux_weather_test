import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {            
            cener: {lat: this.props.lat, lng: this.props.lon},
            zoom: 10            
        });
    }

    render() {
        return <div className="mapClass" ref="map" />
    }
}

export default GoogleMap