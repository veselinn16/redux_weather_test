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
                <td><Chart data={temps} color="black" /></td>
                <td><Chart data={pressures} color="orange" /></td>
                <td><Chart data={humidity} color="yellow" /></td>
            </tr>
        )
    }
    
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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