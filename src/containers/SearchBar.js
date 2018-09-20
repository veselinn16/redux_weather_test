import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = e => {
        this.setState({ term: e.target.value});
    }

    onFormSubmit = e => {
        e.preventDefault();

        // get weather data
        this.props.fetchWeather(this.state.term);
        this.setState( {term: ''} );
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get 5 day forecast for cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);