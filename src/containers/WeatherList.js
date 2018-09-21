import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidity = cityData.list.map(weather => weather.main.humidity)
        const pressures = cityData.list.map(weather => weather.main.pressure);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="black" unit="K" /></td>
                <td><Chart data={pressures} color="orange" unit="hPa" /></td>
                <td><Chart data={humidity} color="yellow" unit="%" /></td>
            </tr>
        )
    }
    
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(el => this.renderWeather(el))}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) { // state.weather
    return { weather }; // { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)